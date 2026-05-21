import { Link } from 'react-router-dom'
import { ArrowLeft, Cookie } from 'lucide-react'

export default function Cookies() {
  return (
    <div className="bg-slate-50 py-32 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-200/60 p-8 sm:p-12 lg:p-16">
        <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#0C008E]/10 flex items-center justify-center text-[#0C008E]">
            <Cookie className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Política de Cookies
          </h1>
        </div>

        <div className="prose prose-slate max-w-none text-gray-600 space-y-8 leading-relaxed text-base sm:text-lg">
          <p>
            En cumplimiento con lo dispuesto en el artículo 22.2 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), así como en el Reglamento General de Protección de Datos (RGPD), este sitio web le informa sobre la política de recogida y tratamiento de cookies.
          </p>

          <section className="space-y-4 pt-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              ¿Qué son las cookies?
            </h2>
            <p>
              Una cookie es un fichero que se descarga en su ordenador o dispositivo móvil al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
            </p>
          </section>

          <section className="space-y-4 pt-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              ¿Qué tipos de cookies utiliza esta página web?
            </h2>
            <p>Este sitio web utiliza los siguientes tipos de cookies:</p>
            <ul className="space-y-4 list-disc pl-6 marker:text-[#0C008E]">
              <li>
                <strong className="text-gray-900">Cookies técnicas (necesarias):</strong> Son aquellas que permiten al usuario la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existen, como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, recordar los elementos que integran un pedido o realizar el proceso de compra.
              </li>
              <li>
                <strong className="text-gray-900">Cookies analíticas:</strong> Son aquellas que, bien tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la oferta de productos o servicios que le ofrecemos.
              </li>
              <li>
                <strong className="text-gray-900">Cookies de publicidad o marketing:</strong> Son aquellas que, bien tratadas por nosotros o por terceros, nos permiten gestionar de la forma más eficaz posible la oferta de los espacios publicitarios que hay en la página web, adecuando el contenido del anuncio al contenido del servicio solicitado o al uso que realice de nuestra página web.
              </li>
            </ul>
          </section>

          <section className="space-y-4 pt-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Desactivación y eliminación de cookies en el navegador
            </h2>
            <p>
              Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador. A continuación, le ofrecemos enlaces a la información de soporte de los principales navegadores:
            </p>
            <ul className="space-y-2 list-none pl-0 text-base">
              <li className="flex items-center gap-2">
                <span className="text-[#0C008E] font-bold">•</span>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#0C008E] font-semibold hover:underline">Google Chrome</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#0C008E] font-bold">•</span>
                <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web" target="_blank" rel="noopener noreferrer" className="text-[#0C008E] font-semibold hover:underline">Mozilla Firefox</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#0C008E] font-bold">•</span>
                <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#0C008E] font-semibold hover:underline">Apple Safari</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#0C008E] font-bold">•</span>
                <a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-[#0C008E] font-semibold hover:underline">Microsoft Edge</a>
              </li>
            </ul>
          </section>

          <section className="space-y-4 pt-4 pb-8 border-b border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              Actualizaciones y cambios en la Política de Cookies
            </h2>
            <p>
              El Centro médico de investigación S.L. puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos, por ello se aconseja a los usuarios que la visiten periódicamente.
            </p>
          </section>

          {/* Volver al Home Button */}
          <div className="pt-6 flex justify-center sm:justify-start">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[#0C008E] text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-200 hover:bg-[#08005e] hover:shadow-lg"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Volver al inicio</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
