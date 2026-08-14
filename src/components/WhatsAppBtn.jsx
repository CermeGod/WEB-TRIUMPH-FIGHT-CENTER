import './WhatsAppBtn.css';
import { waLink, trackContact } from '../lib/track';

const WhatsAppBtn = () => {
    return (
        <a
            href={waLink('Hola, quiero información sobre Triumph Fight Center 🥊')}
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            onClick={() => trackContact('boton_flotante')}
        >
            <span className="tooltip-text">¡Escríbenos!</span>
            <svg viewBox="0 0 32 32" className="whatsapp-icon" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2a13 13 0 0 0-11 20L3 30l8-2a13 13 0 1 0 5-26zm0 24a11 11 0 0 1-5-1l-.4-.2-4 1 1-4-.2-.5A11 11 0 1 1 16 26zm6-8c-.3-.2-2-.8-2-1s-.4-.3-.6 0c-.2.2-.6.7-.8 1-.1.2-.3.2-.6.1-.3-.1-1.3-.5-2.5-1.5-1-1-1.5-1.5-1.7-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.4.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.8-2-1-2.6c-.3-.7-.6-.6-.8-.6h-.6c-.2 0-.6 0-1 .4s-1.3 1.3-1.3 3c0 1.8 1.4 3.5 1.6 3.8.2.3 2.5 4 6 5.5.9.4 1.5.6 2 .8 1 .3 1.8.3 2.5.2s2-.8 2.3-1.6.3-1.5.2-1.6c-.1 0-.3-.1-.6-.2z" />
            </svg>
        </a>
    );
};

export default WhatsAppBtn;
