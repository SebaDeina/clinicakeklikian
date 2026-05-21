import { useState, useEffect, useCallback } from 'react'

const TICK_MS = 50

export function useAutoAdvance(count, intervalMs = 6000) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  const goTo = useCallback((index) => {
    setActiveIndex(index)
    setProgress(0)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReducedMotion(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    if (reducedMotion || count < 1) return undefined

    setProgress(0)
    const startedAt = Date.now()

    const tick = setInterval(() => {
      const elapsed = Date.now() - startedAt
      const pct = Math.min(100, (elapsed / intervalMs) * 100)
      setProgress(pct)

      if (elapsed >= intervalMs) {
        setActiveIndex((i) => (i + 1) % count)
      }
    }, TICK_MS)

    return () => clearInterval(tick)
  }, [activeIndex, reducedMotion, count, intervalMs])

  return { activeIndex, progress, reducedMotion, goTo }
}
