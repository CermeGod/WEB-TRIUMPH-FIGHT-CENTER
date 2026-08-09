import './Hero.css';
import { MapPin, Clock, Swords, Flame, Instagram, Facebook } from 'lucide-react';
import heroBanner from '../assets/imagen-banner-hero.webp';
import fotoGrupal from '../assets/foto-grupal-3.webp';

const Hero = () => {
    return (
        <section className="hero">
            <img src={heroBanner} alt="" aria-hidden="true" className="hero-bg" loading="eager" decoding="async" fetchpriority="high" />
            <div className="hero-scrim" aria-hidden="true"></div>
            <span className="ghost-text hero-ghost" aria-hidden="true">TRIUMPH</span>

            <div className="container hero-grid">
                <div className="hero-copy">
                    <span className="kicker hero-kicker">Triumph Fight Center · Surco, Lima</span>

                    <h1 className="hero-title">
                        Aquí se forjan<br />
                        <span className="hero-title-accent">campeones</span>
                    </h1>

                    <p className="hero-sub">
                        Especialistas en <strong>Muay Thai</strong>, <strong>Boxeo</strong> y <strong>Kickboxing</strong>.
                        También <strong>Kickboxing</strong> y <strong>Muay Thai Teens</strong>.
                    </p>

                    <div className="hero-chips">
                        <span className="hero-chip"><MapPin size={15} /> Av. Primavera 1288, Surco</span>
                        <span className="hero-chip"><Clock size={15} /> Lun–Sáb · 7am – 10pm</span>
                    </div>

                    <div className="hero-actions">
                        <a href="https://wa.me/51900966701" target="_blank" rel="noopener noreferrer" className="btn-primary">
                            Primera clase gratis
                        </a>
                        <a href="#clase" className="btn-outline">Ver disciplinas</a>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <Swords size={18} />
                            <div>
                                <strong>3 disciplinas</strong>
                                <span>Muay Thai · Boxeo · Kickboxing</span>
                            </div>
                        </div>
                        <div className="hero-stat">
                            <Flame size={18} />
                            <div>
                                <strong>Circuito nacional</strong>
                                <span>Campeones formados en casa</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-socials">
                        <a href="https://www.instagram.com/triumphfightcenter.peru/?hl=es" target="_blank" rel="noopener noreferrer" aria-label="Instagram Triumph Fight Center">
                            <Instagram size={22} />
                        </a>
                        <a href="https://www.facebook.com/p/Triumph-Fight-Center-61556514788548/" target="_blank" rel="noopener noreferrer" aria-label="Facebook Triumph Fight Center">
                            <Facebook size={22} />
                        </a>
                        <a href="https://www.tiktok.com/@triumphfightcenter.peru" target="_blank" rel="noopener noreferrer" aria-label="TikTok Triumph Fight Center">
                            <svg viewBox="0 0 448 512" width="18" height="20" fill="currentColor" aria-hidden="true">
                                <path d="M448 209.91a210.06 210.06 0 01-122.77-39.25v178.72A162.55 162.55 0 11162.55 78.52v79.14a83.38 83.38 0 1083.39 83.39V0h79.15a163.51 163.51 0 00122.91 163.76z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-frame">
                        <img src={fotoGrupal} alt="Alumnos y coaches entrenando en Triumph Fight Center, academia de Muay Thai y Boxeo en Surco" className="hero-photo" width="560" height="680" loading="eager" fetchpriority="high" />
                        <span className="hero-frame-tag">EST. SURCO</span>
                    </div>
                </div>
            </div>

            <a href="#clase" className="hero-scroll" aria-hidden="true">
                <span></span>
            </a>
        </section>
    );
};

export default Hero;
