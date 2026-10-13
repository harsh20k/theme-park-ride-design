import { useMemo } from 'react'
import * as THREE from 'three'
import { useThree } from '@react-three/fiber'
import type { BookDims } from './BookModel'

export const FOV = 14
export const CAM_Z = 40
export const CAM_Y = 0.95

/** Scene measurements shared by everything on the canvas: world units ↔ page pixels, and the size of a book. */
export interface Metrics extends BookDims {
  visH: number
  visW: number
  pxPerUnit: number
  winW: number
  winH: number
  /** Canvas size in CSS pixels. */
  cw: number
  ch: number
}

export function useMetrics(): Metrics {
  const { size } = useThree()
  return useMemo(() => {
    const winW = window.innerWidth
    const winH = window.innerHeight
    const visH = 2 * CAM_Z * Math.tan(THREE.MathUtils.degToRad(FOV / 2))
    const pxPerUnit = size.height / visH
    const visW = size.width / pxPerUnit
    const L = (0.5 * winW) / pxPerUnit // book length ≈ 50vw on screen
    const T = 0.115 * visH // spine thickness ≈ 11.5vh — identical for every book
    const W = L * 0.68
    return { visH, visW, pxPerUnit, winW, winH, L, T, W, cw: size.width, ch: size.height }
  }, [size.height, size.width])
}
