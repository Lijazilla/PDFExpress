import React from "react";
import { Link } from "react-router-dom";
import './index-Landing.css';

const LandingPage = () => {
    return (
        <div>
            <section className="container-index-navbar">
                <div className="logo-div">
                    {/* <img src="./images/PDFpro_logo.png" alt="PDFpro_logo" class="logo"> */}
                </div>

                <div className="index-navbar-center">
                    <nav className="main-navbar-list">
                        <ul className="ul-main-navbar-list">
                            <li>Home</li>
                            <li>About us</li>
                            <li>Pricing</li>
                            <li>Contact</li>
                        </ul>   
                    </nav>
                </div>

                <div className="index-navbar-right">
                    <button>Inicia sesión</button>
                    <button>Registrate</button>
                </div>
            </section>

            <section className="body-main-container">
                <div className="index-main-title-container">
                    <div className="index-h1-title-container">
                        <h1>Genera reportes de tus Servicios en minutos.</h1>
                        <h2>Mandalo a tus clientes al momento.</h2>
                    </div> 
                    <div className="index-text-main-container">
                        <ul>
                            <li>Paso 1 - Inicia sesión en nuestra plataforma.</li>
                            <li>Paso 2 - Escribe el texto de reporte.</li>
                            <li>Paso 3 - Adjunta o toma las fotos al momento.</li>
                            <li>Paso 4 - Crea el documento y envíalo a tus clientes.</li>
                        </ul>
                    </div> 
                </div>
                <div className="body-img-main-container">

                </div>
                
            </section>

            <section>
                
            </section>
            {/* <Link to="/app">Ir a la App</Link> */}
        </div>
    );
};

export default LandingPage;
