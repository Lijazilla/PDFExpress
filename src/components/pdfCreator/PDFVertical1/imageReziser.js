import React, { useState, useEffect } from 'react';
import pica from 'pica';

const ImageResizer = ({ imageUrl, targetWidth, targetHeight, onImageResized }) => {
    useEffect(() => {
        const loadImageAndResize = async () => {
            const img = new Image();
            img.src = imageUrl;

            img.onload = () => {
                const imgWidth = img.width;
                const imgHeight = img.height;

                let newWidth = imgWidth;
                let newHeight = imgHeight;

                if (imgWidth > targetWidth || imgHeight > targetHeight) {
                    const scaleFactor = Math.min(
                        targetWidth / imgWidth,
                        targetHeight / imgHeight
                    );
                    newWidth = imgWidth * scaleFactor;
                    newHeight = imgHeight * scaleFactor;
                }

                const targetCanvas = document.createElement('canvas');
                targetCanvas.width = newWidth;
                targetCanvas.height = newHeight;
                const resizer = pica();

                resizer
                    .resize(img, targetCanvas)
                    .then(resultCanvas => {
                        onImageResized(resultCanvas.toDataURL());
                    });
            };
        };

        loadImageAndResize();
    }, [imageUrl, targetWidth, targetHeight, onImageResized]);

    return null;
};

export default ImageResizer;
