import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Al cambiar de ruta, ir al inicio sin animación (página nueva). */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
