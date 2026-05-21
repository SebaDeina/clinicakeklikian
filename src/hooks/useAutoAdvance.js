import { useState, useEffect, useCallback, useRef } from 'react'

const TICK_MS = 50

export function useAutoAdvance(count, intervalMs = 6000, { enabled = true } = {}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const wasEnabledRef = useRef(enabled)

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
    if (!enabled) {
      setActiveIndex(0)
      setProgress(0)
      wasEnabledRef.current = false
      return
    }

    if (!wasEnabledRef.current) {
      setActiveIndex(0)
      setProgress(0)
    }
    wasEnabledRef.current = true
  }, [enabled])

  useEffect(() => {
    if (reducedMotion || count < 1 || !enabled) return undefined

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
  }, [activeIndex, reducedMotion, count, intervalMs, enabled])

  return { activeIndex, progress, reducedMotion, goTo }
}
