import { useState, useRef, useEffect, useCallback } from 'react'
import { useLanguage } from '../context/LanguageContext'

const TIMELINE_COLOR = '#EBB9D1'
const TIMELINE_TRACK = '#EBB9D140'
const CARD_CLASS = 'w-full max-w-xl'

function StepCard({ paso, reveal, fromLeft, className = '' }) {
  const offset = (1 - reveal) * 36
  const translateX = fromLeft ? -offset : offset
  const translateY = (1 - reveal) * 16

  return (
    <div
      className={`rounded-2xl border border-gray-200/60 bg-white px-6 py-5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:px-8 sm:py-7 ${className}`}
      style={{
        opacity: reveal,
        transform: `translate(${translateX}px, ${translateY}px)`,
        willChange: 'opacity, transform',
      }}
    >
      <h3 className="text-base font-extrabold text-gray-900 sm:text-lg">{paso.titulo}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-gray-600 sm:text-[15px]">{paso.descripcion}</p>
    </div>
  )
}

function TimelineDot({ reveal, sizeClass = 'h-4 w-4' }) {
  const scale = Math.min(1, Math.max(0, (reveal - 0.1) / 0.5))

  return (
    <span
      className={`relative z-10 block shrink-0 rounded-full ring-4 ring-slate-50 ${sizeClass}`}
      style={{
        backgroundColor: TIMELINE_COLOR,
        opacity: Math.max(scale, 0.2),
        transform: `scale(${scale})`,
        willChange: 'opacity, transform',
      }}
      aria-hidden
    />
  )
}

function useReducedMotion() {
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

/** Progreso 0→1 según scroll: el paso aparece al acercarse al centro de la pantalla */
function useStepReveal(reduced) {
  const ref = useRef(null)
  const [reveal, setReveal] = useState(reduced ? 1 : 0)

  useEffect(() => {
    if (reduced) {
      setReveal(1)
      return
    }
    const el = ref.current
    if (!el) return

    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const trigger = vh * 0.78
      const anchor = rect.top + rect.height * 0.35
      const range = vh * 0.42
      const next = Math.min(1, Math.max(0, (trigger - anchor) / range))
      setReveal((prev) => (Math.abs(prev - next) < 0.008 ? prev : next))
    }

    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [reduced])

  return { ref, reveal: reduced ? 1 : reveal }
}

function useTimelineProgress(timelineRef, reduced) {
  const [progress, setProgress] = useState(reduced ? 1 : 0)

  const update = useCallback(() => {
    const el = timelineRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight
    const start = vh * 0.82
    const end = vh * 0.28
    const total = rect.height + start - end
    const raw = (start - rect.top) / total
    setProgress(Math.min(1, Math.max(0, raw)))
  }, [timelineRef])

  useEffect(() => {
    if (reduced) {
      setProgress(1)
      return
    }

    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [reduced, update])

  return progress
}

function TimelineLine({ progress, className = '' }) {
  return (
    <div
      className={`absolute overflow-hidden rounded-full ${className}`}
      style={{ backgroundColor: TIMELINE_TRACK }}
      aria-hidden
    >
      <div
        className="absolute left-0 top-0 h-full w-full origin-top motion-reduce:transition-none"
        style={{
          backgroundColor: TIMELINE_COLOR,
          transform: `scaleY(${progress})`,
          transition: 'transform 0.12s ease-out',
        }}
      />
    </div>
  )
}

function MobileStep({ paso, isLast, reduced }) {
  const { ref, reveal } = useStepReveal(reduced)

  return (
    <li ref={ref} className={`flex gap-5 ${isLast ? 'pb-0' : 'pb-10'}`}>
      <div className="flex w-6 shrink-0 justify-center pt-7">
        <TimelineDot reveal={reveal} sizeClass="h-3.5 w-3.5" />
      </div>
      <div className="min-w-0 flex-1">
        <StepCard paso={paso} reveal={reveal} fromLeft={false} className={CARD_CLASS} />
      </div>
    </li>
  )
}

function DesktopStep({ paso, index, isLast, reduced }) {
  const { ref, reveal } = useStepReveal(reduced)
  const isLeft = index % 2 === 0

  return (
    <li
      ref={ref}
      className={`grid grid-cols-[1fr_2rem_1fr] items-center gap-x-8 lg:gap-x-12 ${isLast ? 'py-2' : 'py-8 lg:py-10'}`}
    >
      <div className={`flex min-w-0 ${isLeft ? 'justify-end pr-2 lg:pr-6' : 'justify-end'}`}>
        {isLeft ? (
          <StepCard paso={paso} reveal={reveal} fromLeft className={CARD_CLASS} />
        ) : (
          <span className="sr-only">{paso.titulo}</span>
        )}
      </div>

      <div className="flex justify-center self-center">
        <TimelineDot reveal={reveal} />
      </div>

      <div className={`flex min-w-0 ${!isLeft ? 'justify-start pl-2 lg:pl-6' : 'justify-start'}`}>
        {!isLeft ? (
          <StepCard paso={paso} reveal={reveal} fromLeft={false} className={CARD_CLASS} />
        ) : (
          <span className="sr-only">{paso.titulo}</span>
        )}
      </div>
    </li>
  )
}

export default function Proceso() {
  const { t } = useLanguage()
  const s = t.proceso
  const sectionRef = useRef(null)
  const mobileTimelineRef = useRef(null)
  const desktopTimelineRef = useRef(null)
  const reduced = useReducedMotion()
  const [headerVisible, setHeaderVisible] = useState(reduced)

  const mobileProgress = useTimelineProgress(mobileTimelineRef, reduced)
  const desktopProgress = useTimelineProgress(desktopTimelineRef, reduced)

  useEffect(() => {
    if (reduced) {
      setHeaderVisible(true)
      return
    }
    const el = sectionRef.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true)
      },
      { threshold: 0.15, rootMargin: '0px 0px -5% 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [reduced])

  return (
    <section
      id="proceso"
      ref={sectionRef}
      className="scroll-mt-28 overflow-hidden border-y border-gray-100 bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto mb-12 max-w-3xl text-center transition-all duration-700 ease-out motion-reduce:transition-none sm:mb-16 ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          }`}
        >
          <span className="inline-block rounded-full border border-[#0C008E]/10 bg-[#0C008E]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0C008E]">
            {s.tag}
          </span>
          <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            {s.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            {s.subtitle}
          </p>
        </div>

        {/* Móvil */}
        <div ref={mobileTimelineRef} className="mx-auto max-w-2xl md:hidden">
          <ul className="relative">
            <TimelineLine
              progress={mobileProgress}
              className="absolute bottom-4 left-3 top-4 w-0.5 -translate-x-1/2"
            />
            {s.pasos.map((paso, i) => (
              <MobileStep
                key={paso.titulo}
                paso={paso}
                isLast={i === s.pasos.length - 1}
                reduced={reduced}
              />
            ))}
          </ul>
        </div>

        {/* Desktop */}
        <div ref={desktopTimelineRef} className="relative mx-auto hidden max-w-6xl md:block">
          <TimelineLine
            progress={desktopProgress}
            className="absolute left-1/2 top-3 bottom-3 w-0.5 -translate-x-1/2"
          />
          <ul className="space-y-0">
            {s.pasos.map((paso, i) => (
              <DesktopStep
                key={paso.titulo}
                paso={paso}
                index={i}
                isLast={i === s.pasos.length - 1}
                reduced={reduced}
              />
            ))}
          </ul>
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 ease-out motion-reduce:transition-none sm:mt-14 ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          style={{ transitionDelay: headerVisible ? '280ms' : '0ms' }}
        >
          <button
            type="button"
            onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-pink"
          >
            {s.cta}
          </button>
        </div>
      </div>
    </section>
  )
}
