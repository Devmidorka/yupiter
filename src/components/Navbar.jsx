import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navbar__logo">
                <div style={{width: 46, height: 44}}/>
                <h2>Agency</h2>
            </div>
            <div className="navbar__menu">
                <ul>
                    <li>About</li>
                    <li>Services</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="navbar__contact-button">
                contact
            </div>
        </div>

    );
};

export default Navbar;