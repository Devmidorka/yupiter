import React from 'react';
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className='header'>
            <div className="header__content container">
                <Navbar/>
                <h1 className='header__title'>Portfolio</h1>
                <p className='header__info'>Agency provides a full service range including technical skills, design, business understanding.</p>
            </div>
        </div>
    );
};

export default Header;