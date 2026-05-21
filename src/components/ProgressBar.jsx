export default function ProgressBar({ active, progress, reducedMotion }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-100" aria-hidden>
      <div
        className="h-full bg-[#0C008E]"
        style={{
          width: active ? (reducedMotion ? '100%' : `${progress}%`) : '0%',
          transition: active ? 'none' : 'width 0.2s ease',
        }}
      />
    </div>
  )
}
