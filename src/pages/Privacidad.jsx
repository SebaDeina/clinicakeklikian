import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Privacidad() {
  return (
    <div className="bg-slate-50 py-32 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-200/60 p-8 sm:p-12 lg:p-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 tracking-tight border-b border-gray-100 pb-6">
          Política de privacidad
        </h1>

        <div className="prose prose-slate max-w-none text-gray-600 space-y-8 leading-relaxed text-base sm:text-lg">
          <p>
            Centro médico de investigación S.L. nos comprometemos a asegurar que su información personal se encuentre protegida y no se utilice de forma indebida. Al facilitarnos su información personal y utilizar nuestro sitio web, entendemos que ha leído y comprendido los términos relacionados con la información de protección de datos de carácter personal que se expone a continuación.
          </p>

          <section className="space-y-4 pt-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              ¿Quién es el responsable del tratamiento de sus datos?
            </h2>
            <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 space-y-2 text-base">
              <p><strong className="text-gray-900">Entidad:</strong> Centro médico de investigación S.L.</p>
              <p><strong className="text-gray-900">CIF:</strong> B58567133</p>
              <p><strong className="text-gray-900">Domicilio:</strong> Calle Alba 7, 07171 Calvia, Islas Baleares</p>
              <p><strong className="text-gray-900">Teléfonos:</strong> +34 xxxxxxx</p>
              <p><strong className="text-gray-900">Correo electrónico:</strong> contacto@clinicakeklikian.com</p>
              <p className="pt-2 text-sm text-gray-500">Puede dirigirse de cualquier forma para comunicarse con nosotros.</p>
            </div>
          </section>

          <section className="space-y-4 pt-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              ¿Qué información tratamos?
            </h2>
            <p>
              El tipo de información que recopilemos dependerá de las circunstancias y de los servicios que utilice. En términos generales, obtendremos información sobre usted de la siguiente manera:
            </p>
            <ul className="space-y-4 list-disc pl-6 marker:text-[#0C008E]">
              <li>
                <strong className="text-gray-900">Datos identificativos y de contacto:</strong> Obtenemos sus datos identificativos y de contacto cuando se registra en nuestra web, cuando contrata nuestros servicios o productos, cuando nos solicita información a través de su correo electrónico, cuando se suscribe a nuestros boletines informativos, cuando nos envía una consulta o cuando solicite colaborar con nosotros.
              </li>
              <li>
                <strong className="text-gray-900">Información sobre el uso de nuestro sitio web:</strong> Obtenemos información sobre cómo usa nuestra web, lo que incluye información sobre las páginas de nuestra web que visita, los servicios o la información que busca y los enlaces y contenidos a los que accede. Podríamos utilizar la información que nos proporciona a través de su uso del sitio web para ofrecerle contenidos que sean de su interés y para contribuir a determinar nuestra estrategia de marketing. Este tipo de actividad, conocida como “perfilado” o “profiling”, consiste en la utilización de medios automatizados para analizar sus datos personales y predecir sus preferencias, intereses y hábitos. Puede oponerse al perfilado en cualquier momento. Consulta nuestra Política de Cookies para obtener más información sobre las cookies que utilizamos.
              </li>
              <li>
                <strong className="text-gray-900">Datos técnicos:</strong> Obtenemos información sobre los dispositivos que utiliza para acceder al sitio web, lo cual incluye el código único ID de su teléfono móvil o la dirección IP desde la que accede al sitio web que identifica de forma única el dispositivo específico desde el que accede a internet. Recibimos y tratamos esta información por medio de una cookie ID. Puede encontrar más información sobre las cookies que utilizamos sobre las finalidades para las que las utilizamos en nuestra Política de Cookies.
              </li>
            </ul>
          </section>

          <section className="space-y-4 pt-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              ¿Con qué finalidad recabamos su información personal?
            </h2>
            <p>A continuación incluimos las principales finalidades que hemos identificado:</p>
            <ul className="space-y-2 list-none pl-0">
              <li className="flex items-start gap-2">
                <span className="text-[#0C008E] font-bold">–</span>
                <span>Gestión de la contratación de los servicios ofrecidos por Centro médico de investigación S.L.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0C008E] font-bold">–</span>
                <span>Cumplimiento de obligaciones legales.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0C008E] font-bold">–</span>
                <span>Canalizar las solicitudes de información, sugerencias y reclamaciones para su gestión y resolución.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0C008E] font-bold">–</span>
                <span>Mantenerle informado, sobre nuestros servicios, si usted nos presta su consentimiento.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4 pt-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              ¿Cuál es la legitimación para el tratamiento de sus datos?
            </h2>
            <p>Para el tratamiento de sus datos personales nos basamos en la legitimación por varios motivos:</p>
            <ul className="space-y-2 list-none pl-0">
              <li className="flex items-start gap-2">
                <span className="text-[#0C008E] font-bold">–</span>
                <span>Para el cumplimiento de un contrato y/o relación comercial.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0C008E] font-bold">–</span>
                <span>Para el cumplimiento de distintas obligaciones legales.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0C008E] font-bold">–</span>
                <span>En interés legítimo del responsable del tratamiento.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#0C008E] font-bold">–</span>
                <span>Con su consentimiento para el envío de información sobre nuestros productos, ofertas, promociones, etc.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4 pt-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              ¿A qué destinatarios se comunicarán sus datos?
            </h2>
            <p>
              Sus datos no se cederán a terceros, salvo obligación legal. En concreto se comunicarán a la Agencia Estatal de la Administración Tributaria y a bancos y entidades financieras para el cobro del servicio prestado o producto adquirido, así como a los encargados del tratamiento necesarios para la ejecución del acuerdo.
            </p>
            <p>
              En caso de compra o pago, si elige alguna aplicación web, plataforma, tarjeta bancaria, o algún otro servicio online, sus datos se cederán a esa plataforma o se tratarán en su entorno, siempre con la máxima seguridad.
            </p>
            <p>
              Utilizamos determinadas aplicaciones que implican una transferencia internacional a Estados Unidos. Ésta únicamente se realizará a entidades que hayan demostrado y que se hayan comprometido a través de cláusulas contractuales tipo (en inglés SCCs) a cumplir con el nivel de protección y garantías de acuerdo con los parámetros y exigencias previstas en la normativa europea vigente en materia de protección de datos, como el Reglamento Europeo, o cuando exista un habilitación legal para realizar la transferencia internacional.
            </p>
          </section>

          <section className="space-y-4 pt-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              ¿Tratamos datos de menores de edad?
            </h2>
            <p>
              No tratamos datos de menores de 14 años, por tanto, absténgase de facilitarlos si no tiene esa edad.
            </p>
          </section>

          <section className="space-y-4 pt-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              ¿Qué medidas de seguridad aplicamos?
            </h2>
            <p>
              Puedes estar tranquilo, hemos adoptado un nivel óptimo de protección de los Datos Personales que manejamos, y hemos instalado todos los medios y medidas técnicas a nuestra disposición según el estado de la tecnología para evitar la pérdida, mal uso, alteración, acceso no autorizado y robo de los Datos Personales.
            </p>
          </section>

          <section className="space-y-6 pt-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              ¿Cuáles son sus derechos en relación con el tratamiento de datos?
            </h2>
            <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm">
              <table className="w-full text-left border-collapse text-base">
                <thead>
                  <tr className="bg-slate-100 border-b border-gray-200 text-gray-900 font-bold">
                    <th className="p-4 sm:p-5 w-1/3">Derecho</th>
                    <th className="p-4 sm:p-5 w-2/3">Contenido</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-600">
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-gray-900 align-top">ACCESO</td>
                    <td className="p-4 sm:p-5 align-top">Podrá consultar sus datos personales incluidos en nuestros ficheros.</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-4 sm:p-5 font-bold text-gray-900 align-top">RECTIFICACIÓN</td>
                    <td className="p-4 sm:p-5 align-top">Podrá modificar sus datos personales cuando sean inexactos.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-gray-900 align-top">SUPRESIÓN</td>
                    <td className="p-4 sm:p-5 align-top">Podrá solicitar la eliminación de sus datos personales.</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-4 sm:p-5 font-bold text-gray-900 align-top">OPOSICIÓN</td>
                    <td className="p-4 sm:p-5 align-top">Podrá solicitar que no se traten sus datos personales.</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-gray-900 align-top">LIMITACIÓN DEL TRATAMIENTO</td>
                    <td className="p-4 sm:p-5 align-top space-y-2">
                      <p>Podrá solicitar la limitación al tratamiento de sus datos en los siguientes casos:</p>
                      <ul className="list-none pl-0 space-y-1 text-sm sm:text-base">
                        <li className="flex items-start gap-2">
                          <span className="text-[#0C008E] font-bold">–</span>
                          <span>Mientras se comprueba la impugnación de la exactitud de sus datos.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#0C008E] font-bold">–</span>
                          <span>Cuando el tratamiento es ilícito, pero te opongas a la supresión de sus datos.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#0C008E] font-bold">–</span>
                          <span>Cuando el Responsable no necesite tratar sus datos pero usted los necesite para el ejercicio o la defensa de reclamaciones.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#0C008E] font-bold">–</span>
                          <span>Cuando se hayas opuesto al tratamiento de sus datos para el cumplimiento de una misión en interés público o para la satisfacción de un interés legítimo, mientras se verifica si los motivos legítimos para el tratamiento prevalecen sobre los suyos.</span>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-4 sm:p-5 font-bold text-gray-900 align-top">PORTABILIDAD</td>
                    <td className="p-4 sm:p-5 align-top">Podrá recibir, en formato electrónico, los datos personales que nos haya facilitado, así como transmitirlos a otra entidad.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 space-y-4 text-base">
              <p>
                El ejercicio de estos derechos puede ser solicitado al email <a href="mailto:contacto@clinicakeklikian.com" className="text-[#0C008E] font-semibold hover:underline">contacto@clinicakeklikian.com</a> o contactando en la dirección postal que aparece en el apartado “Responsable”.
              </p>
              <p>
                Tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos en el supuesto que considere que no se ha atendido convenientemente el ejercicio de sus derechos. En el caso de producirse alguna modificación de sus datos, le agradecemos nos lo comunique debidamente por escrito con la finalidad de mantener sus datos actualizados.
              </p>
            </div>
          </section>

          <section className="space-y-4 pt-4 pb-8 border-b border-gray-100">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              ¿Durante cuánto tiempo vamos a mantener sus datos personales?
            </h2>
            <p>
              Los datos personales serán mantenidos mientras siga vinculado con nosotros. Una vez se desvincule, los datos personales tratados en cada finalidad se mantendrán durante los plazos legalmente previstos, incluido el plazo en el que un juez o tribunal los pueda requerir atendiendo al plazo de prescripción de acciones judiciales.
            </p>
            <p>
              Mantendremos toda la información y comunicaciones relativas a su compra o a la prestación de nuestro servicio, mientras duren las garantías de los productos o servicios, para atender posibles reclamaciones.
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
