import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const media = window.matchMedia('(pointer: coarse)')
    if (media.matches) return

    let frame = 0
    const handleMove = (e: PointerEvent) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
        frame = 0
      })
    }

    window.addEventListener('pointermove', handleMove)
    return () => {
      window.removeEventListener('pointermove', handleMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[70vw] max-h-[820px] w-[70vw] max-w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.12] blur-[110px] transition-transform duration-500 ease-out will-change-transform"
      style={{ background: 'radial-gradient(circle, var(--color-signal), transparent 70%)' }}
    />
  )
}
