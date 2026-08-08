import './Gloria.css';
import { Star, ChevronRight } from 'lucide-react';
import leonardoImg from '../assets/Campeon.Leonardo Palomino.webp';
import cameponPalominoImg from '../assets/CAMEPON PALOMINO.webp';
import katerineImg1 from '../assets/campeona-sudamericanda.webp';
import katerineImg2 from '../assets/campeona-2do-lugar-brasil-foto2.webp';
import katerineImg3 from '../assets/campeona-2dolugar-brasil.webp';

const Gloria = () => {
    return (
        <section id="gloria" className="section trophy-room-section">
            <span className="ghost-text gloria-ghost" aria-hidden="true">GLORIA</span>
            <div className="container">
                <div className="section-head center trophy-header">
                    <span className="kicker">Nuestra gloria</span>
                    <h2>Sala de campeones</h2>
                    <p className="trophy-subtitle">
                        El tatami donde se forjan guerreros. Estos son nuestros logros y la sangre derramada por la victoria en el circuito nacional.
                    </p>
                </div>

                <div className="champions-list">
                    <article className="hall-of-fame">
                        <span className="rank-ghost ghost-text" aria-hidden="true">01</span>
                        <div className="hof-image-side">
                            <img src={cameponPalominoImg} alt="Campeón Leonardo Palomino entrenando en Triumph Fight Center Surco" className="champion-img" width="500" height="600" loading="lazy" />
                        </div>
                        <div className="hof-content">
                            <div className="champion-badge">
                                <Star size={16} /> CAMPEÓN 63,500 KICKBOXING - K1
                            </div>
                            <h3>Leonardo Palomino</h3>
                            <ul className="profesor-skills" style={{ marginBottom: "20px" }}>
                                <li><strong>Especialización:</strong> Muay Thai / Kickboxing</li>
                                <li><strong>Exp:</strong> 6 años</li>
                                <li><strong>Movimiento Estrella:</strong> High Kick</li>
                                <li><strong>Personalidad:</strong> Silencioso pero letal, siempre sonriendo.</li>
                            </ul>
                            <p className="quote gloria-quote">
                                "El dolor es temporal, el orgullo es para siempre."
                            </p>
                            <a href="https://wa.me/51900966701" target="_blank" rel="noopener noreferrer" className="champion-link">
                                Sé como Leonardo <ChevronRight size={16} />
                            </a>
                        </div>
                    </article>

                    <article className="hall-of-fame hall-of-fame-reverse">
                        <span className="rank-ghost ghost-text" aria-hidden="true">02</span>
                        <div className="hof-image-side has-crossfade-3">
                            <img src={katerineImg1} alt="Katerine Vargas Campeona" className="champion-img cf-img cf-img-1" width="500" height="600" loading="lazy" />
                            <img src={katerineImg2} alt="Katerine Vargas Accion" className="champion-img cf-img cf-img-2" width="500" height="600" loading="lazy" />
                            <img src={katerineImg3} alt="Katerine Vargas Tercera" className="champion-img cf-img cf-img-3" width="500" height="600" loading="lazy" />
                        </div>
                        <div className="hof-content">
                            <div className="champion-badge">
                                <Star size={16} /> Sub-Campeona Sudamericana KickBoxing (Brasil 2025)
                            </div>
                            <h3>Katerine Vargas</h3>
                            <ul className="profesor-skills" style={{ marginBottom: "20px" }}>
                                <li><strong>Especialización:</strong> Muay Thai / Kickboxing</li>
                                <li><strong>Exp:</strong> 25 años</li>
                                <li><strong>Movimiento Estrella:</strong> Low kick</li>
                                <li><strong>Personalidad:</strong> Tranquila en los entrenamientos pero agresividiad al 100% en el ring, no deja aperturas.</li>
                            </ul>
                            <p className="quote gloria-quote">
                                "La mejor defensa es el ataque."
                            </p>
                            <a href="https://wa.me/51900966701" target="_blank" rel="noopener noreferrer" className="champion-link">
                                Sé como Katerine <ChevronRight size={16} />
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Gloria;
