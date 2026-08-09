import './Profesor.css';
import { Instagram } from 'lucide-react';
import joelImg1 from '../assets/profesor-joel-imagen1.webp';
import joelImg2 from '../assets/Profeso-Joel-imagen2.webp';

const Profesor = () => {
    return (
        <section id="coach" className="section profesor-section">
            <span className="ghost-text profesor-ghost-text" aria-hidden="true">COACH</span>
            <div className="container">
                <div className="profesor-card">
                    <div className="profesor-img-side has-crossfade">
                        <img
                            src={joelImg1}
                            alt="Joel Álvarez, director y head coach de Triumph Fight Center"
                            className="profesor-img base-img"
                            width="400" height="500" loading="lazy"
                        />
                        <img
                            src={joelImg2}
                            alt="Joel Álvarez entrenando en Triumph Fight Center"
                            className="profesor-img crossfade-img"
                            width="400" height="500" loading="lazy"
                        />
                    </div>
                    <div className="profesor-text-side">
                        <h2>Joel Álvarez</h2>
                        <p className="profesor-role">Director &amp; Head Coach</p>
                        <ul className="profesor-skills">
                            <li><strong>Especialización:</strong> Muay Thai - KickBoxing - Box y Preparación Física</li>
                            <li><strong>Exp:</strong> 15 años</li>
                            <li><strong>Movimiento Estrella:</strong> TODOS</li>
                            <li><strong>Personalidad:</strong> Estricto pero divertido, amante del buen café.</li>
                        </ul>
                        <p className="quote">
                            "Transmitiendo conocimiento con pasión, integridad y un nivel técnico impecable para forjar la mente de cada guerrero."
                        </p>
                        <div className="profesor-socials" style={{ display: 'flex', gap: '20px', marginTop: '8px' }}>
                            <a href="https://www.instagram.com/triumphfightcenter.peru/?hl=es" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Triumph Fight Center">
                                <Instagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profesor;
