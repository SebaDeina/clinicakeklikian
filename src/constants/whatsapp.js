import translations from '../i18n/translations.js'

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

/** Agendar consulta online — mensaje desde la página del nuevo servicio */
export function getWhatsAppConsultaOnlineUrl(lang = 'es') {
  const msg =
    translations[lang]?.consultasOnlinePage?.whatsappMessage ??
    translations.es.consultasOnlinePage.whatsappMessage
  return whatsappUrl(msg)
}
