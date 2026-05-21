import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown } from 'lucide-react'

export default function MotivoSelect({ label, placeholder, options, value, onChange }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const handlePointerDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.body.style.overflow = ''
    }
  }, [open])

  const handleSelect = (option) => {
    onChange(option)
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="w-full min-h-[48px] px-4 py-3 rounded-xl border border-gray-200 bg-white text-base text-left flex items-center justify-between gap-3 focus:outline-none focus:ring-2 focus:ring-[#e879a0] focus:border-transparent"
      >
        <span className={`leading-snug break-words ${value ? 'text-gray-800' : 'text-gray-400'}`}>
          {value || placeholder}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-label="Cerrar opciones"
            className="fixed inset-0 z-[200] bg-black/40 md:hidden"
            onClick={() => setOpen(false)}
          />

          <ul
            role="listbox"
            className="fixed inset-x-0 bottom-0 z-[201] max-h-[min(70vh,420px)] overflow-y-auto overscroll-contain bg-white rounded-t-2xl shadow-2xl border-t border-gray-200 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:absolute md:inset-x-0 md:bottom-auto md:top-full md:mt-2 md:max-h-64 md:rounded-xl md:border md:shadow-xl md:p-2"
          >
            <li className="md:hidden px-2 pb-2 mb-1 border-b border-gray-100">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">{label}</p>
            </li>
            {options.map((option) => {
              const selected = value === option
              return (
                <li key={option} role="option" aria-selected={selected}>
                  <button
                    type="button"
                    onClick={() => handleSelect(option)}
                    className={`w-full text-left px-4 py-3.5 rounded-xl text-base leading-snug break-words flex items-start justify-between gap-3 transition-colors ${
                      selected
                        ? 'bg-[#e879a0]/10 text-[#0C008E] font-semibold'
                        : 'text-gray-800 hover:bg-gray-50 active:bg-gray-100'
                    }`}
                  >
                    <span>{option}</span>
                    {selected && <Check className="w-5 h-5 shrink-0 text-[#e879a0] mt-0.5" />}
                  </button>
                </li>
              )
            })}
          </ul>
        </>
      )}
    </div>
  )
}
