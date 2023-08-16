// NavBar.js
import './navbar.css';
import React, { useState } from 'react';

import HorizontalVerticalMenu from '../horizontalVerticalMenu/horizontalVerticalMenu'
import ImagesMenu from '../imagesMenu/imagesMenu';
import ConfirmPreferences from '../confirmPreferences/confirmPreferences'; // Asegúrate de importar correctamente
import { FaHome } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';



const NavBar = ({ handleConfirmPreferences, handleDownload }) => {
    const [isMenuVisible, setMenuVisible] = useState(false);
    const [isImagesMenuVisible, setImagesMenuVisible] = useState(false);
    const [selectedOrientationNavbar, setSelectedOrientationNavbar] = useState('');
    const [selectedImageNavbar, setSelectedImageNavbar] = useState(null);
    const navigate = useNavigate();

    const handleHomeButton = () =>{
        navigate('/');
    }

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
        setSelectedImageNavbar(null);
    };

    const toggleImagesMenu = () => {
        setImagesMenuVisible(!isImagesMenuVisible);
    };

    const handleOrientationOptionClick = (option) => {
        setSelectedOrientationNavbar(option);
        setMenuVisible(false);
    };

    const handleImageOptionClick = (option) => {
        setSelectedImageNavbar(option);
        setImagesMenuVisible(false);
    };

    const handleConfirmButtonClick = () => {
        console.log('Desde Confirm Preferences', selectedOrientationNavbar, selectedImageNavbar);
        handleConfirmPreferences(selectedOrientationNavbar, selectedImageNavbar);
    };

    return (
        <div className="navbar">
        <div className="first-menu">
            <div className="app-logo">
            {/* <Link to="/">Ir a Home</Link> */}
            </div>
            <div className='home-icon'>
            <FaHome onClick={handleHomeButton} size={30}/>
            </div>

            <div className="menu-selectors">
            <button className="orientation" onClick={toggleMenu}>
                Orientación
                {isMenuVisible && <HorizontalVerticalMenu handleOrientationOptionSelected={handleOrientationOptionClick} />}
            </button>

            <button className="images-selector" onClick={toggleImagesMenu}>
                # Images
                {isImagesMenuVisible && <ImagesMenu handleImageOptionSelected={handleImageOptionClick} />}
            </button>

            <ConfirmPreferences orientationSelected={selectedOrientationNavbar} images={selectedImageNavbar} onClick={handleConfirmButtonClick} />
            </div>

            <div className="rightbar">
            <button id="usuario">User</button>
            <button id="logout">Logout</button>
            </div>
        </div>

        </div>
    );
};

export default NavBar;
