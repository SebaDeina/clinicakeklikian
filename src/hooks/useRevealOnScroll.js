import { useEffect, useRef, useState } from 'react'

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = () => setReduced(mq.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return reduced
}

/** Revela el bloque al entrar en viewport (una sola vez). */
export function useRevealOnScroll({ threshold = 0.12, rootMargin = '0px 0px -6% 0px' } = {}) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const [visible, setVisible] = useState(reduced)

  useEffect(() => {
    if (reduced) {
      setVisible(true)
      return
    }
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold, rootMargin }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [reduced, threshold, rootMargin])

  const motionClass = visible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-7'

  return {
    ref,
    visible,
    reduced,
    className: `transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${motionClass}`,
  }
}
