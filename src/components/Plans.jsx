import './Plans.css';
import { useRef } from 'react';
import { CheckCircle2, ShieldAlert, ArrowLeft, ArrowRight } from 'lucide-react';

const Plans = () => {
    const plansGridRef = useRef(null);

    const scrollGrid = (dir) => {
        if (!plansGridRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = plansGridRef.current;
        const scrollAmount = 350;

        if (dir === 'left') {
            if (scrollLeft <= 0) {
                plansGridRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
            } else {
                plansGridRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        } else {
            if (scrollLeft + clientWidth >= scrollWidth - 10) {
                plansGridRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                plansGridRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section id="planes" className="plans-section">
            <div className="container">
                <div className="section-header plans-header">
                    <span className="section-badge">Membresías</span>
                    <h2>Promociones Mensuales</h2>
                    <p>Sé constante, disciplinado y puntual en tu renovación y goza siempre de los beneficios y precios especiales de TRIUMPH.</p>
                </div>

                <div className="carousel-controls mobile-only">
                    <button onClick={() => scrollGrid('left')} aria-label="Anterior"><ArrowLeft size={32} /></button>
                    <button onClick={() => scrollGrid('right')} aria-label="Siguiente"><ArrowRight size={32} /></button>
                </div>
                <div className="plans-grid" ref={plansGridRef}>
                    {/* Membresía Básica */}
                    <div className="plan-card">
                        <div className="plan-header">
                            <h3>Membresía Básica</h3>
                            <div className="price-container">
                                <span className="regular-price">precio regular s/. 270</span>
                                <div className="plan-price">S/. 220</div>
                            </div>
                        </div>
                        <ul className="plan-features">
                            <li><CheckCircle2 size={20} className="check-icon" /> Entrenamientos 3 veces por semana horarios fijos</li>
                            <li><CheckCircle2 size={20} className="check-icon" /> Entrenamiento semi personalizado 1er mes</li>
                            <li><CheckCircle2 size={20} className="check-icon" /> Una sola disciplina</li>
                            <li><CheckCircle2 size={20} className="check-icon" /> Evaluación Fisioterapia (Flexibilidad, movilidad y fuerza)</li>
                        </ul>
                        <a href="https://wa.me/51900966701" target="_blank" rel="noopener noreferrer" className="btn-outline plan-btn">Elegir Básica</a>
                    </div>

                    {/* Membresía Estándar */}
                    <div className="plan-card plan-pro">
                        <div className="pro-badge">Más Popular</div>
                        <div className="plan-header">
                            <h3>Membresía Estándar</h3>
                            <div className="price-container">
                                <span className="regular-price">precio regular s/. 320</span>
                                <div className="plan-price">S/. 290</div>
                            </div>
                        </div>
                        <ul className="plan-features">
                            <li><CheckCircle2 size={20} className="check-icon" /> Horarios flexibles</li>
                            <li><CheckCircle2 size={20} className="check-icon" /> Entrenamiento lun a sab (dobletea horarios)</li>
                            <li><CheckCircle2 size={20} className="check-icon" /> Entrenamiento semi personalizado 1er mes</li>
                            <li><CheckCircle2 size={20} className="check-icon" /> 2 disciplinas</li>
                            <li><CheckCircle2 size={20} className="check-icon" /> Evaluación Fisioterapia</li>
                            <li><CheckCircle2 size={20} className="check-icon" /> Evaluación Nutricional (antropométrica de inicio)</li>
                        </ul>
                        <a href="https://wa.me/51900966701" target="_blank" rel="noopener noreferrer" className="btn-primary plan-btn">Elegir Estándar</a>
                    </div>

                    {/* Membresía Premium */}
                    <div className="plan-card">
                        <div className="plan-header">
                            <h3>Membresía Premium</h3>
                            <div className="price-container">
                                <span className="regular-price">precio regular s/. 380</span>
                                <div className="plan-price">S/. 330</div>
                            </div>
                        </div>
                        <ul className="plan-features">
                            <li><CheckCircle2 size={20} className="check-icon" /> Horarios flexibles</li>
                            <li><CheckCircle2 size={20} className="check-icon" /> Entrenamiento ilimitado lunes a sábado</li>
                            <li><CheckCircle2 size={20} className="check-icon" /> 4 sesiones personalizadas preparación física (fds)</li>
                            <li><CheckCircle2 size={20} className="check-icon" /> Todas las disciplinas</li>
                            <li><CheckCircle2 size={20} className="check-icon" /> 1 terapia descarga Fisioterapia mensual</li>
                            <li><CheckCircle2 size={20} className="check-icon" /> Evaluación nutricional + seguimiento mensual</li>
                        </ul>

                        <div className="premium-warning">
                            <ShieldAlert size={16} />
                            <span>No congelamientos / No es transferible / No hay reembolso</span>
                        </div>
                        <a href="https://wa.me/51900966701" target="_blank" rel="noopener noreferrer" className="btn-outline plan-btn">Elegir Premium</a>
                    </div>
                </div>

                {/* Banner de Clases Personalizadas */}
                <div className="personalized-banner">
                    <div className="personalized-content">
                        <h3>Clases Personalizadas</h3>
                        <p>Horarios flexibles a convenir • 100% personalizado • 1 hora de clase</p>
                    </div>
                    <div className="personalized-options">
                        <div className="option-box">
                            <span className="pz-price">S/. 520</span>
                            <span className="pz-desc">8 sesiones mensuales</span>
                        </div>
                        <div className="option-box">
                            <span className="pz-price">S/. 780</span>
                            <span className="pz-desc">12 sesiones mensuales</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Plans;
