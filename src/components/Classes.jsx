import './Classes.css';
import capoImage from '../assets/capoeria-kid-servicio-carruse.webp';
import teenImage from '../assets/kickboxing-teen-servicio-carrusel.webp';
import tkdImage from '../assets/taekwondo.webp';
import muayThaiImg from '../assets/Muay thai .webp';
import boxeoImg from '../assets/guantes-tirumph.boxeo.webp';
import { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Classes = () => {
    const [modalImage, setModalImage] = useState(null);
    const kidsGridRef = useRef(null);

    const openModal = (imgSrc) => setModalImage(imgSrc);
    const closeModal = () => setModalImage(null);

    const scrollGrid = (dir) => {
        if (!kidsGridRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = kidsGridRef.current;
        const scrollAmount = 350;

        if (dir === 'left') {
            if (scrollLeft <= 0) {
                kidsGridRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' });
            } else {
                kidsGridRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        } else {
            if (scrollLeft + clientWidth >= scrollWidth - 10) {
                kidsGridRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                kidsGridRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section id="clase" className="section section--light classes-section">
            <div className="container">
                <div className="section-head">
                    <span className="kicker">Entrena como campeón</span>
                    <h2>Nuestras disciplinas</h2>
                    <p>Programas para forjar mente y cuerpo. No importa si eres principiante absoluto o competidor avanzado: aquí tienes tu lugar.</p>
                </div>

                <div className="classes-grid">
                    <article className="class-card">
                        <span className="class-number">01</span>
                        <div className="class-img-wrapper">
                            <img src={muayThaiImg} alt="Clase de Muay Thai en Triumph Fight Center Surco" width="600" height="400" loading="lazy" />
                        </div>
                        <div className="class-info">
                            <h3>Muay Thai</h3>
                            <p>El arte de las ocho extremidades. Aprende la técnica más letal de striking tailandés con nuestros campeones.</p>
                            <a href="https://wa.me/51900966701" target="_blank" rel="noopener noreferrer" className="class-link">Infórmate Ahora &rarr;</a>
                        </div>
                    </article>

                    <article className="class-card">
                        <span className="class-number">02</span>
                        <div className="class-img-wrapper">
                            <img src={boxeoImg} alt="Entrenamiento de Boxeo Clásico para adultos en Lima" width="600" height="400" loading="lazy" />
                        </div>
                        <div className="class-info">
                            <h3>Boxeo Clásico</h3>
                            <p>Técnica, resistencia y poder. Domina el cuadrilátero con un entrenamiento enfocado en la velocidad y el movimiento de pies.</p>
                            <a href="https://wa.me/51900966701" target="_blank" rel="noopener noreferrer" className="class-link">Infórmate Ahora &rarr;</a>
                        </div>
                    </article>

                    <article className="class-card">
                        <span className="class-number">03</span>
                        <div className="class-img-wrapper">
                            <img src={teenImage} alt="Sesión de Kickboxing funcional en Triumph Fight Center" width="600" height="400" loading="lazy" />
                        </div>
                        <div className="class-info">
                            <h3>Kickboxing</h3>
                            <p>Combina el poder de los puños y las patadas. Mejora tu agilidad y resistencia en entrenamientos de alta intensidad.</p>
                            <a href="https://wa.me/51900966701" target="_blank" rel="noopener noreferrer" className="class-link">Infórmate Ahora &rarr;</a>
                        </div>
                    </article>
                </div>

                <div className="section-head center eventual-header">
                    <span className="kicker">Para toda la familia</span>
                    <h2>Cursos eventuales</h2>
                    <p>Programas especiales para los más jóvenes y el público en general.</p>
                </div>

                <div className="carousel-controls mobile-only">
                    <button onClick={() => scrollGrid('left')} aria-label="Anterior"><ArrowLeft size={32} /></button>
                    <button onClick={() => scrollGrid('right')} aria-label="Siguiente"><ArrowRight size={32} /></button>
                </div>

                <div className="classes-grid kids-grid" ref={kidsGridRef}>
                    <article className="class-card">
                        <div className="class-img-wrapper cursor-zoom" onClick={() => openModal(teenImage)}>
                            <img src={teenImage} alt="Kickboxing Teens" width="400" height="300" loading="lazy" />
                        </div>
                        <div className="class-info">
                            <h3>Kickboxing Teens</h3>
                            <p>Disciplina, respeto y flexibilidad. Una excelente base marcial para el desarrollo físico y mental de los niños.</p>
                            <a href="https://wa.me/51900966701" target="_blank" rel="noopener noreferrer" className="class-link">Infórmate Ahora &rarr;</a>
                        </div>
                    </article>

                    <article className="class-card">
                        <div className="class-img-wrapper cursor-zoom" onClick={() => openModal(capoImage)}>
                            <img src={capoImage} alt="Capoeira Kids" width="400" height="300" loading="lazy" />
                        </div>
                        <div className="class-info">
                            <h3>Capoeira Kids</h3>
                            <p>Música, acrobacia y artes marciales. Desarrollo de la coordinación y el ritmo en un ambiente lleno de energía.</p>
                            <a href="https://wa.me/51900966701" target="_blank" rel="noopener noreferrer" className="class-link">Infórmate Ahora &rarr;</a>
                        </div>
                    </article>

                    <article className="class-card">
                        <div className="class-img-wrapper cursor-zoom" onClick={() => openModal(tkdImage)}>
                            <img src={tkdImage} alt="Taekwondo" width="400" height="300" loading="lazy" />
                        </div>
                        <div className="class-info">
                            <h3>Taekwondo</h3>
                            <p>El camino de los pies y manos. Desarrolla velocidad asombrosa, flexibilidad y autocontrol con nuestras clases dinámicas.</p>
                            <a href="https://wa.me/51900966701" target="_blank" rel="noopener noreferrer" className="class-link">Infórmate Ahora &rarr;</a>
                        </div>
                    </article>
                </div>
            </div>

            {/* Modal for full image view */}
            {modalImage && (
                <div className="image-lightbox" onClick={closeModal}>
                    <div className="lightbox-content">
                        <img src={modalImage} alt="Curso Eventual Ampliado" />
                        <button className="close-lightbox" onClick={closeModal}>&times;</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Classes;
