import React from "react";
import '../../index-Landing.css';


const ImageGallery = ({ images }) => {
    return (
        <div className="image-gallery">
        {images.map((image, index) => (
            <div key={index} className="image-container">
            <img src={image.url} alt={image.alt} />
            </div>
        ))}
        </div>
    );
};

export default ImageGallery;
