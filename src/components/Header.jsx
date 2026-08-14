import './Header.css';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Superlogo.webp';
import { waLink, trackLead } from '../lib/track';

const CTA_MSG = 'Hola, quiero reservar mi PRIMERA CLASE GRATIS en Triumph Fight Center 🥊';

const LINKS = [
    { href: '#clase', label: 'Clases' },
    { href: '#gloria', label: 'Campeones' },
    { href: '#eventos', label: 'Eventos' },
    { href: '#coach', label: 'Coach' },
];

const Header = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Bloquear scroll del body cuando el menú móvil está abierto
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    return (
        <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
            <div className="container header-inner">
                <a href="/" className="header-logo" aria-label="Triumph Fight Center - inicio">
                    <img src={logo} alt="Triumph Fight Center" width="180" height="60" loading="eager" fetchpriority="high" />
                </a>

                <nav className="nav-desktop" aria-label="Principal">
                    {LINKS.map((l) => (
                        <a key={l.href} href={l.href}>{l.label}</a>
                    ))}
                </nav>

                <div className="header-cta">
                    <a href={waLink(CTA_MSG)} target="_blank" rel="noopener noreferrer" className="btn-primary" onClick={() => trackLead('header')}>
                        Clase gratis
                    </a>
                </div>

                <button
                    className="nav-toggle"
                    onClick={() => setOpen(true)}
                    aria-label="Abrir menú"
                    aria-expanded={open}
                >
                    <Menu size={26} />
                </button>
            </div>

            {/* Menú móvil */}
            <div className={`nav-mobile ${open ? 'nav-mobile--open' : ''}`} role="dialog" aria-modal="true" aria-hidden={!open}>
                <button className="nav-close" onClick={() => setOpen(false)} aria-label="Cerrar menú">
                    <X size={30} />
                </button>
                <nav className="nav-mobile-links" aria-label="Móvil">
                    {LINKS.map((l) => (
                        <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
                    ))}
                </nav>
                <a
                    href={waLink(CTA_MSG)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary nav-mobile-cta"
                    onClick={() => { trackLead('nav_movil'); setOpen(false); }}
                >
                    Primera clase gratis
                </a>
            </div>
        </header>
    );
};

export default Header;
