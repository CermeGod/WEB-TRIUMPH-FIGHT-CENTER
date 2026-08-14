/* ============================================================
   TRIUMPH FIGHT CENTER — Capa de tracking de conversiones
   ------------------------------------------------------------
   Un solo punto para disparar eventos en TODOS los CTA.
   Dispara a la vez a:
     - Meta Pixel   (window.fbq)  → para Ads de Facebook/Instagram
     - Google GA4   (window.gtag) → ya instalado en index.html
     - dataLayer    (GTM genérico)
   Todo con guardas: si el pixel aún no está instalado, es un
   no-op silencioso (no rompe nada). El día que pegues el Pixel
   en index.html, todos los eventos empiezan a registrar solos.
   ============================================================ */

export const WA_NUMBER = '51900966701';

/**
 * Construye un enlace de WhatsApp con mensaje pre-llenado.
 * @param {string} msg - Texto que verá pre-escrito el usuario.
 */
export function waLink(msg = 'Hola, quiero información sobre Triumph Fight Center.') {
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

/**
 * Dispara un evento de conversión a todas las plataformas presentes.
 * @param {string} event  - Nombre de evento estándar de Meta: 'Lead' | 'Contact' | 'InitiateCheckout' | 'ViewContent'
 * @param {object} params - Detalle: { content_name, content_category, ... }
 */
export function track(event, params = {}) {
    if (typeof window === 'undefined') return;

    // Meta Pixel
    if (typeof window.fbq === 'function') {
        window.fbq('track', event, params);
    }

    // Google Analytics 4 (gtag ya cargado en index.html)
    if (typeof window.gtag === 'function') {
        window.gtag('event', event.toLowerCase(), params);
    }

    // dataLayer genérico (por si mañana usan GTM)
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'cta_click', cta_event: event, ...params });
}

/** Atajo para el CTA principal repetido "Primera clase gratis". */
export const trackLead = (place) =>
    track('Lead', { content_name: 'clase_gratis', content_category: place });

/** Atajo para contacto directo (botón flotante / teléfono). */
export const trackContact = (place) =>
    track('Contact', { content_name: 'whatsapp', content_category: place });
