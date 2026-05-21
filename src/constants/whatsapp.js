const WHATSAPP_PHONE = '34649603386'

export function whatsappUrl(text) {
  const params = new URLSearchParams({
    phone: WHATSAPP_PHONE,
    text,
    type: 'phone_number',
    app_absent: '0',
  })
  return `https://api.whatsapp.com/send/?${params.toString()}`
}

/** Botón flotante del home */
export const WHATSAPP_URL_HOME = whatsappUrl('hola')

const WHATSAPP_CONSULTA_MESSAGES = {
  es: 'Quiero agendar mi consulta online',
  en: 'I would like to book an online consultation',
  de: 'Ich möchte eine Online-Konsultation vereinbaren',
}

/** Agendar consulta online (mensaje según idioma) */
export function getWhatsAppConsultaOnlineUrl(lang = 'es') {
  return whatsappUrl(WHATSAPP_CONSULTA_MESSAGES[lang] ?? WHATSAPP_CONSULTA_MESSAGES.es)
}
