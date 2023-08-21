import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageSlider = () => {
    const settings = {
        dots: true, // Muestra los puntos de navegación
        infinite: true, // Bucle infinito
        speed: 500, // Velocidad de transición
        slidesToShow: 1, // Cantidad de imágenes a mostrar
        slidesToScroll: 3, // Cantidad de imágenes a desplazar
    };

    return (
        <Slider {...settings}>
            <div>
                <img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="Photo Working" />
            </div>
            <div>
                <img src="https://images.unsplash.com/photo-1621905253185-95614217f357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80" alt="Editing report" />
            </div>
            <div>
                <img src='https://i.postimg.cc/XNHPjdHm/documento-final-pose-ganadora.jpg' alt="Final Result" />
            </div>
            {/* Agrega más elementos div para más imágenes */}
        </Slider>
    );
};

export default ImageSlider;
