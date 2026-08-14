import './Footer.css';
import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';
import logo from '../assets/Superlogo.webp';
import { waLink, trackLead, trackContact } from '../lib/track';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <div className="footer-brand">
                    <a href="/" aria-label="Triumph Fight Center - inicio">
                        <img src={logo} alt="Triumph Fight Center" className="footer-logo-img" width="200" height="70" loading="lazy" />
                    </a>
                    <p className="footer-tagline">Muay Thai · Boxeo · Kickboxing en Surco, Lima.</p>
                    <a href={waLink('Hola, quiero reservar mi PRIMERA CLASE GRATIS en Triumph Fight Center 🥊')} target="_blank" rel="noopener noreferrer" className="btn-primary footer-cta" onClick={() => trackLead('footer')}>
                        Primera clase gratis
                    </a>
                </div>

                <div className="footer-contact">
                    <div className="contact-item">
                        <MapPin size={22} className="icon" />
                        <address>
                            <a href="https://maps.google.com/?q=Av.+Primavera+1288,+Santiago+de+Surco+15023" target="_blank" rel="noopener noreferrer">
                                Av. Primavera 1288, Santiago de Surco 15023
                            </a>
                        </address>
                    </div>
                    <div className="contact-item">
                        <Phone size={22} className="icon" />
                        <p><a href="tel:+51900966701" onClick={() => trackContact('footer_tel')}>900 966 701</a></p>
                    </div>
                    <div className="footer-social">
                        <a href="https://www.instagram.com/triumphfightcenter.peru/?hl=es" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <Instagram size={22} />
                        </a>
                        <a href="https://www.facebook.com/p/Triumph-Fight-Center-61556514788548/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <Facebook size={22} />
                        </a>
                        <a href="https://www.tiktok.com/@triumphfightcenter.peru" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                            <svg viewBox="0 0 448 512" width="18" height="20" fill="currentColor" aria-hidden="true">
                                <path d="M448 209.91a210.06 210.06 0 01-122.77-39.25v178.72A162.55 162.55 0 11162.55 78.52v79.14a83.38 83.38 0 1083.39 83.39V0h79.15a163.51 163.51 0 00122.91 163.76z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>© {new Date().getFullYear()} Triumph Fight Center. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
