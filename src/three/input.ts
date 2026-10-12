import { useEffect, useMemo } from 'react'
import { useApp } from '@/state/store'

export interface InputState {
  forward: number // -1..1
  turn: number // -1..1
  target: [number, number, number] | null
}

/**
 * Unified input: keyboard (WASD / arrows), on-screen joystick (sets `joy`),
 * and click-to-travel targets from the store. Read once per frame.
 */
class InputModel {
  private keys = new Set<string>()
  joy = { x: 0, y: 0 }

  constructor() {
    if (typeof window === 'undefined') return
    window.addEventListener('keydown', this.down)
    window.addEventListener('keyup', this.up)
    window.addEventListener('blur', () => this.keys.clear())
  }
  private down = (e: KeyboardEvent) => {
    if (isTyping(e)) return
    const k = e.key.toLowerCase()
    if (['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(k)) {
      this.keys.add(k)
      e.preventDefault()
      // Any steering cancels click-to-travel.
      if (useApp.getState().travelTarget) useApp.getState().setTravelTarget(null)
    }
  }
  private up = (e: KeyboardEvent) => this.keys.delete(e.key.toLowerCase())

  read(): InputState {
    const k = this.keys
    let forward = (k.has('w') || k.has('arrowup') ? 1 : 0) - (k.has('s') || k.has('arrowdown') ? 1 : 0)
    let turn = (k.has('a') || k.has('arrowleft') ? 1 : 0) - (k.has('d') || k.has('arrowright') ? 1 : 0)
    if (Math.abs(this.joy.y) > 0.08 || Math.abs(this.joy.x) > 0.08) {
      forward = -this.joy.y
      turn = -this.joy.x
    }
    return { forward, turn, target: useApp.getState().travelTarget }
  }
  clearTarget() {
    useApp.getState().setTravelTarget(null)
  }
}

function isTyping(e: KeyboardEvent): boolean {
  const t = e.target as HTMLElement | null
  return !!t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)
}

let singleton: InputModel | null = null
export function getInput(): InputModel {
  if (!singleton) singleton = new InputModel()
  return singleton
}

export function useInput(): InputModel {
  const input = useMemo(getInput, [])
  useEffect(() => () => void 0, [])
  return input
}
