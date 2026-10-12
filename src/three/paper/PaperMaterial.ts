import * as THREE from 'three'

/**
 * Papercraft material: MeshStandardMaterial with
 *  - procedural paper grain + soft fibre shading (fragment)
 *  - subtle crease/fold normal noise (fragment)
 *  - edge darkening to fake card-stock thickness at silhouettes (fragment)
 *  - optional stop-motion "boil": per-vertex jitter stepped at 12 fps (vertex)
 *
 * Shared uniforms live in `paperUniforms` and are ticked once per frame.
 */
export const paperUniforms = {
  uTime: { value: 0 },
  uStepTime: { value: 0 }, // quantised to 1/12 s
  uBoilEnabled: { value: 1 },
}

export interface PaperMaterialParams extends THREE.MeshStandardMaterialParameters {
  /** 0 = no boil, 1 = default jitter strength for key props. */
  boil?: number
  /** Grain strength 0–1. */
  grain?: number
}

export class PaperMaterial extends THREE.MeshStandardMaterial {
  private boil: number
  private grain: number

  constructor({ boil = 0, grain = 0.5, ...params }: PaperMaterialParams = {}) {
    super({ roughness: 0.92, metalness: 0, flatShading: true, ...params })
    this.boil = boil
    this.grain = grain
    this.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = paperUniforms.uTime
      shader.uniforms.uStepTime = paperUniforms.uStepTime
      shader.uniforms.uBoilEnabled = paperUniforms.uBoilEnabled
      shader.uniforms.uBoil = { value: this.boil }
      shader.uniforms.uGrain = { value: this.grain }

      shader.vertexShader = shader.vertexShader
        .replace(
          '#include <common>',
          `#include <common>
          uniform float uStepTime; uniform float uBoil; uniform float uBoilEnabled;
          varying vec3 vWorldPos;
          float hash13(vec3 p){ p = fract(p*0.3183099+vec3(0.1,0.2,0.3)); p += dot(p,p.yzx+19.19); return fract((p.x+p.y)*p.z); }`,
        )
        .replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
          if (uBoil > 0.0 && uBoilEnabled > 0.5) {
            float t = uStepTime;
            vec3 seed = floor(position * 6.0) + t;
            vec3 j = vec3(hash13(seed), hash13(seed + 7.1), hash13(seed + 13.7)) - 0.5;
            transformed += j * 0.012 * uBoil;
          }`,
        )
        .replace('#include <worldpos_vertex>', `#include <worldpos_vertex>\n vWorldPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`)

      shader.fragmentShader = shader.fragmentShader
        .replace(
          '#include <common>',
          `#include <common>
          uniform float uGrain;
          varying vec3 vWorldPos;
          float phash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
          float pnoise(vec2 p){ vec2 i = floor(p); vec2 f = fract(p); f = f*f*(3.0-2.0*f);
            return mix(mix(phash(i), phash(i+vec2(1,0)), f.x), mix(phash(i+vec2(0,1)), phash(i+vec2(1,1)), f.x), f.y); }`,
        )
        .replace(
          '#include <color_fragment>',
          `#include <color_fragment>
          {
            // paper grain: fine speckle + soft fibre streaks along one axis
            vec2 gp = vWorldPos.xz * 38.0 + vWorldPos.y * 17.0;
            float speck = phash(floor(gp));
            float fibre = pnoise(vec2(vWorldPos.x * 60.0 + vWorldPos.y * 9.0, vWorldPos.z * 4.0 + vWorldPos.y * 3.0));
            float g = (speck - 0.5) * 0.08 + (fibre - 0.5) * 0.10;
            diffuseColor.rgb *= 1.0 + g * uGrain;
          }`,
        )
        .replace(
          '#include <normal_fragment_maps>',
          `#include <normal_fragment_maps>
          {
            // crease noise: very low-frequency wobble so flat faces don't read as plastic
            float c = pnoise(vWorldPos.xz * 2.5 + vWorldPos.y * 1.3) - 0.5;
            float d = pnoise(vWorldPos.zy * 2.1 + 3.7) - 0.5;
            normal = normalize(normal + vec3(c, d, c * d) * 0.12 * uGrain);
          }`,
        )
        .replace(
          '#include <dithering_fragment>',
          `#include <dithering_fragment>
          {
            // edge thickness: darken grazing angles a touch, like the cut edge of card
            float fres = 1.0 - max(dot(normalize(vViewPosition), normal), 0.0);
            gl_FragColor.rgb *= 1.0 - smoothstep(0.55, 1.0, fres) * 0.22;
          }`,
        )
    }
    this.customProgramCacheKey = () => `paper-${this.boil > 0 ? 'boil' : 'still'}-${this.grain.toFixed(2)}`
  }
}

/** Tick once per frame from the scene. Quantises boil to 12 fps ("on twos" at 24). */
export function tickPaper(elapsed: number, boilEnabled: boolean) {
  paperUniforms.uTime.value = elapsed
  paperUniforms.uStepTime.value = Math.floor(elapsed * 12) / 12
  paperUniforms.uBoilEnabled.value = boilEnabled ? 1 : 0
}
