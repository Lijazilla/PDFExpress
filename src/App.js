//app.js
import React, { useState } from 'react';
import NavBar from './components/navbar/navbar';
import CreatePDFVertical1 from './components/pdfCreator/PDFVertical1/CreatePDFVertical1';
import CreatePDFVertical2 from './components/pdfCreator/PDFVertical2/CreatePDFVertical2';
import CreatePDFVertical3 from './components/pdfCreator/PDFVertical3/CreatePDFVertical3';
import CreatePDFVertical4 from './components/pdfCreator/PDFVertical4/CreatePDFVertical4';
import CreatePDFVertical5 from './components/pdfCreator/PDFVertical5/CreatePDFVertical5';
import CreatePDFVertical6 from './components/pdfCreator/PDFVertical6/CreatePDFVertical6';
// import CreatePDFHorizontal1 from './Components/pdfCreator/PDFHorizontal1/CreatePDFHorizontal1';

const App = () => {
    const [confirmPreferencesClicked, setConfirmPreferencesClicked] = useState(false);
    const [orientation, setOrientation] = useState(null);
    const [numImages, setNumImages] = useState(null);
    const [formatSelected, setFormatSelected] = useState(null);
    const [pdfGenerated, setPdfGenerated] = useState(false);

    const handleConfirmPreferences = (orientation, numImages) => {
        console.log('Received Orientation:', orientation);
        console.log('Received NumImages:', numImages);
    
        if (orientation && numImages) {
        setOrientation(orientation);
        setNumImages(numImages);
    
        if (orientation === 'vertical') {
            if (numImages === 1) {
            setFormatSelected(`vertical${numImages}`);
            setConfirmPreferencesClicked(true);
            } else if (numImages === 2 || numImages === 3 || numImages === 4 || numImages === 5 || numImages === 6) {
            setFormatSelected(`vertical${numImages}`);
            setConfirmPreferencesClicked(true);
            } else {
            // Mostrar el mensaje de alerta si no cumple con las condiciones anteriores
            alert('Opción de formato no válida.');
            }
        } else {
            // Mostrar el mensaje de alerta si no es orientación "vertical"
            alert('Opción de formato no válida.');
        }
        } else {
        alert('Por favor, selecciona tanto la orientación como la cantidad de imágenes.');
        }
    };

    return (
        <div>
        <NavBar handleConfirmPreferences={handleConfirmPreferences} />

        {/* Renderizar el componente adecuado según el estado de confirmPreferencesClicked y formatSelected */}
        {confirmPreferencesClicked && formatSelected === 'vertical2' && <CreatePDFVertical2 />}
        {confirmPreferencesClicked && formatSelected === 'vertical3' && <CreatePDFVertical3 />}
        {confirmPreferencesClicked && formatSelected === 'vertical4' && <CreatePDFVertical4 />}
        {confirmPreferencesClicked && formatSelected === 'vertical5' && <CreatePDFVertical5 />}
        {confirmPreferencesClicked && formatSelected === 'vertical6' && <CreatePDFVertical6 />}
        {confirmPreferencesClicked && formatSelected !== 'vertical2' && 
        formatSelected !== 'vertical3' && formatSelected !== 'vertical4' && formatSelected !== 'vertical5' && formatSelected !== 'vertical6'
        && (
            <>
            {orientation === 'vertical' && (
                <CreatePDFVertical1 orientation={orientation} numImages={numImages} />
            )}
            </>
        )}
        </div>
    );
};

export default App;

