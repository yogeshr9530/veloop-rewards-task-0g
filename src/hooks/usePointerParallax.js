import { useCallback, useRef } from 'react'

export default function usePointerParallax() {
  const ref = useRef(null)

  const onPointerMove = useCallback((event) => {
    const element = ref.current
    if (!element || event.pointerType === 'touch') return

    const bounds = element.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width - 0.5
    const y = (event.clientY - bounds.top) / bounds.height - 0.5

    element.style.setProperty('--shift-x', `${(x * 4).toFixed(2)}px`)
    element.style.setProperty('--shift-y', `${(y * 3).toFixed(2)}px`)
    element.style.setProperty('--glow-x', `${((x + 0.5) * 100).toFixed(1)}%`)
    element.style.setProperty('--glow-y', `${((y + 0.5) * 100).toFixed(1)}%`)
  }, [])

  const onPointerLeave = useCallback(() => {
    const element = ref.current
    if (!element) return
    element.style.setProperty('--shift-x', '0px')
    element.style.setProperty('--shift-y', '0px')
    element.style.setProperty('--glow-x', '50%')
    element.style.setProperty('--glow-y', '38%')
  }, [])

  return { ref, onPointerMove, onPointerLeave }
}
