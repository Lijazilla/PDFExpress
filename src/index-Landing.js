import React from "react";
import { Link } from "react-router-dom";
import './index-Landing.css';

const LandingPage = () => {
    return (
        <div className="body-container">
            <header className="container-index-navbar">
                <div className="logo-div">

                </div>

                <navbar className="index-navbar-center">
                        <ul className="ul-main-navbar-list">
                            <li>Home</li>
                            <li>Pricing</li>
                            <li>Contact</li>
                        </ul>   
                </navbar>

                <div className="index-navbar-right">
                    <button>Inicia sesión</button>
                    <button>Registrate</button>
                </div>
            </header>

            <section className="body-main-container">
                <div className="index-main-title-container">
                    <div className="index-h1-title-container">
                        <h1 className="main-container-h1">PDF Express</h1>
                        <h2 className="main-container-h2">Genera reportes de tus Servicios </h2>
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

                </div>
                
            </section>

            <section className="text-between-sections-container">
                <h1 className="text-between-sections-h1">Simplifica tu proceso de reportes:</h1>
                <h2 className="text-between-sections-h2">Convierte la generación y 
                    envío de informes en un proceso rápido y sencillo, 
                    directamente desde tu dispositivo móvil o escritorio.</h2>
            </section>

            <section className="second-container-benefits">
                
                <div className="second-body-main-container">
                    <div className="second-index-main-title-container">
                        <div className="second-index-h1-title-container">
                            <h1 className="second-main-container-h1">PDF Express</h1>
                            <p className="second-main-container-p">Reportes profesionales en minutos: Olvídate de horas de trabajo en la oficina. 
                            Crea informes detallados y visualmente atractivos al instante, estés donde estés.</p>
                        </div> 
                        <img ></img>

                        <div className="second-index-text-main-container">

                        </div> 
                    </div>
                    <div className="second-body-img-main-container">
                    <p className="second-main-container-p2">Muestra tu trabajo con confianza: Proporciona a tus clientes evidencia visual
                                                                    del servicio realizado en tiempo real, fortaleciendo la confianza en tu trabajo.</p>
                        
                    </div>
                    
                </div>
                
            </section>
            {/* <Link to="/app">Ir a la App</Link> */}
        </div>
    );
};

export default LandingPage;
