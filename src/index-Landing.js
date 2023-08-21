import React from "react";
import { Link } from "react-router-dom";
import './index-Landing.css';
import ImageGallery from "./components/imagesGallery/imageGallery";
import testpng from './assets/images/png-images/people-collaborating-with-tech-.png';
import busyProjectMaganer from './assets/images/png-images/busy-project-manager-overwhelmed-by-work.png';
import personManagingDigitalTasks from './assets/images/png-images/person-managing-digital-tasks.png';
import athletePosing from './assets/images//png-images/athlete-posing-in-action-on-a-podium.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";


const LandingPage = () => {

    const images = [
        {
            // 0
            url: testpng,
            alt: "people working"
        },
        {
            // 1
            url: busyProjectMaganer,
            alt: "./assets/images/png-images/business,-entrepreneurship-and-growth.png"
        },
        {
            // 2
            url: personManagingDigitalTasks,
            alt: "./assets/images/png-images/person-managing-digital-tasks.png"
        },
        {
            // 3
            url: athletePosing,
            alt: "./assets/images//png-images/athlete-posing-in-action-on-a-podium.png"
        },
    ]

    return (
        <div className="body-container">
            <header className="container-index-navbar">
                <div className="logo-div">

                </div>

                <nav className="index-navbar-center">
                        <ul className="ul-main-navbar-list">
                            <li>Home</li>
                            <li>Pricing</li>
                            <li>Contact</li>
                        </ul>   
                </nav>

                <div className="index-navbar-right">
                    <button>Inicia sesión</button>
                    <button>Registrate</button>
                </div>
            </header>

            <section className="body-main-container">
                <div className="index-main-title-container">
                    <div className="index-h1-title-container">
                        <h1 className="main-container-h1">Reporte PDF</h1>
                        <h2 className="main-container-h2">Genera reportes de tus Servicios</h2>
                        <h3 className="main-container-h3">Mandalo a tus clientes al momento.</h3>
                    </div> 
                    <div className="index-text-main-container">
                        <ul className="text-main-container-list">
                            <li>Paso 1 - Escribe el texto de reporte.</li>
                            <li>Paso 2 - Adjunta o toma las fotos al momento.</li>
                            <li>Paso 3 - Envíalo a tus clientes.</li>
                        </ul>
                    </div> 
                </div>
                <div className="body-img-main-container">
                    <img src="https://i.postimg.cc/XNHPjdHm/documento-final-pose-ganadora.jpg" alt="Final Result"/>
                </div>
                
            </section>

            <article className="text-between-sections-container">
                        <h1 className="text-between-sections-h1">Mayor eficiencia en el campo:</h1>
                        <h2 className="text-between-sections-h2">Optimiza tus operaciones y equipos de trabajo, ya que no necesitarás regresar
                                                            a la oficina para completar los reportes.</h2>
            </article>

            {/* First section of benefits */}
            <section className="second-container-benefits">
                
                <div className="second-body-main-container">
                    <div className="second-index-main-title-container">
                        <div className="second-index-h1-title-container">
                            <h1 className="second-main-container-h1">Reporte PDF</h1>
                            <p className="second-main-container-p">Reportes profesionales en minutos: Olvídate de horas de trabajo en la oficina. 
                            Crea informes detallados y visualmente atractivos al instante, estés donde estés.</p>
                        </div> 

                        <div className="second-index-image-main-container">
                            <ImageGallery images={[images[0]]} />
                        </div> 
                    </div>

                    <div className="second-body-main-container">
                        <div className="second-index-main-title-container">

                            <div className="second-index-image-main-container">
                                <ImageGallery images={[images[1]]} />
                            </div> 

                            <div className="second-index-h1-title-container">
                                <h1 className="second-main-container-h1">Reporte PDF</h1>
                                <p className="second-main-container-p">Muestra tu trabajo con confianza: Proporciona a tus clientes evidencia visual
                            del servicio realizado en tiempo real, fortaleciendo la confianza en tu trabajo.</p>
                            </div> 
                        </div>
                    </div>

                </div>
                </section>

                <article className="text-between-sections-container">
                    <h1 className="text-between-sections-h1">Simplifica tu proceso de reportes:</h1>
                    <h2 className="text-between-sections-h2">Convierte la generación y 
                        envío de informes en un proceso rápido y sencillo, 
                        directamente desde tu dispositivo móvil o escritorio.</h2>
                </article>

                {/* second section of benefits */}
                <section className="second-container-benefits">
                
                <div className="second-body-main-container">
                    <div className="second-index-main-title-container">
                        <div className="second-index-h1-title-container">
                            <h1 className="second-main-container-h1">Reporte PDF</h1>
                            <p className="second-main-container-p">Elimina controversias: Evita malentendidos y disputas con reportes detallados que 
                                                                    documentan cada aspecto del servicio, desde texto hasta imágenes.</p>
                        </div> 

                        <div className="second-index-image-main-container">
                            <ImageGallery images={[images[2]]} />
                        </div> 
                    </div>

                    <div className="second-body-main-container">
                        <div className="second-index-main-title-container">

                            <div className="second-index-image-main-container">
                                <ImageGallery images={[images[3]]} />
                            </div> 

                            <div className="second-index-h1-title-container">
                                <h1 className="second-main-container-h1">Reporte PDF</h1>
                                <p className="second-main-container-p">Libera tiempo valioso: Dedica más tiempo a lo que importa. 
                                        Reduce las tareas administrativas y enfócate en ofrecer un servicio de calidad junto con tu equipo de trabajo.</p>
                            </div> 
                        </div>
                    </div>

                </div>
                </section>

                <article className="text-between-sections-container">
                    <h1 className="text-between-sections-h1">Herramienta intuitiva y fácil de usar: </h1>
                    <h2 className="text-between-sections-h2">No se requiere experiencia técnica. Nuestra plataforma te guiará paso a paso para que generes 
                                                            reportes profesionales en minutos.</h2>
                </article>

                    {/* Pricing section */}
                <section className="pricing-section-container">
                    <h1 className="pricing-title">Planes y Precios</h1>
                    
                    <section className="pricing-boxes">
                        <aside className="montly">
                            <h1>Reporte PDF - Plan Mensual Individual</h1>
                            <div className="price-tax-box">
                                <h2>MXN $219.00/Mes</h2>
                                <p>IVA NO INCLUIDO</p>
                            </div>
                            <p>Puedes cancelar en un plazo de 14 días para obtener tu reembolso completo la primera vez.</p>

                            <div className="bottom-pricing-box">
                                <FontAwesomeIcon icon={faLock} className="lock"/>
                                <p>Transacción Segura</p>
                                <button>Comprar ahora</button>
                            </div>
                        </aside>

                        <aside className="anualy">
                            <h1>Reporte PDF - Plan Anual Indiviual</h1>
                            <div className="price-tax-box">
                                <h2>MXN $2,388.00/año</h2>
                                <p>IVA NO INCLUIDO</p>
                            </div>
                            <p>Un solo pago equivalente a $199.00 por 12 meses. Puedes cancelar en un plazo de 14 días para obtener tu reembolso completo la primera vez.</p>
                            <div className="bottom-pricing-box">
                                <FontAwesomeIcon icon={faLock} className="lock"/>
                                <p>Transacción Segura</p>
                                <button>Comprar ahora</button>
                            </div>
                        </aside>
                    </section>
                </section>

                <section className="pricing-section-container">
                    <h1 className="pricing-title">Planes y Precios para Equipos</h1>
                    
                    <section className="pricing-boxes">
                        <aside className="montly">
                            <h1>Reporte PDF - Plan Mensual para Equipos</h1>
                            <div className="price-tax-box">
                                <h2>MXN $199.00/Mes (por licencia)</h2>
                                <p>IVA NO INCLUIDO</p>
                            </div>
                            <p>Para equipos de 3 o más licencias. Puedes cancelar en un plazo de 14 días para obtener tu reembolso completo la primera vez.</p>

                            <div className="bottom-pricing-box">
                                <FontAwesomeIcon icon={faLock} className="lock"/>
                                <p>Transacción Segura</p>
                                <button>Comprar ahora</button>
                            </div>
                        </aside>

                        <aside className="anualy">
                            <h1>Reporte PDF - Plan Anual para Equipos</h1>
                            <div className="price-tax-box-teams">
                                <h2>MXN $2,280.00/año (por licencia)</h2>
                                <p>IVA NO INCLUIDO</p>
                            </div>
                            <p>Para equipos de 3 o más licencias. Un solo pago equivalente a $190.00 por licencia por 12 meses. Puedes cancelar en un plazo de 14 días para obtener tu reembolso completo la primera vez.</p>
                            <div className="bottom-pricing-box">
                                <FontAwesomeIcon icon={faLock} className="lock"/>
                                <p>Transacción Segura</p>
                                <button>Comprar ahora</button>
                            </div>
                        </aside>
                    </section>
                </section>



            <Link to="/app">Ir a la App</Link>
        </div>
    );
};

export default LandingPage;
