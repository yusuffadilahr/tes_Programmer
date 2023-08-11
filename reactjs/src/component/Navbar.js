import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import dunia from '../assets/dunia.png'

const Navbar = () => {
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar is-large is-light" role="navigation" aria-label="main navigation">
            <style>
                {`
          .navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 999;
          }
        `}
            </style>
            <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src={dunia} alt="Logo" />
                    </a>
                    <div className="navbar-burger" onClick={toggleMenu} style={{ marginLeft: 'auto', zIndex: 10 }}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href='/'>
                            Home
                        </a>

                        <a className="navbar-item" href='/convert'>
                            Text To Pdf
                        </a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                                More
                            </a>

                            <div className="navbar-dropdown is-right" style={{ zIndex: 9 }}>
                                <a className="navbar-item" href='/calculator'>
                                    Calculator
                                </a>
                                <a className="navbar-item" href='/means'>
                                    Calculator Means
                                </a>

                                <a className="navbar-item" href='/bookings' style={{ backgroundColor: '#fff' }}>
                                    Antrian
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Menu
                right
                isOpen={isOpen}
                onStateChange={({ isOpen }) => setIsOpen(isOpen)}
                customBurgerIcon={false}
                styles={{
                    bmBurgerBars: { zIndex: 10 },
                    bmMenuWrap: { zIndex: 9, right: 0, left: 'unset', width: '150px', top: '185px' },
                }}>
                <a className="navbar-item" href='/dashboard' style={{ backgroundColor: '#fff' }}>
                    Home
                </a>

                <a className="navbar-item" href='/services' style={{ backgroundColor: '#fff' }}>
                    Text To PDF
                </a>

                <div className="navbar-item has-dropdown is-hoverable" style={{ backgroundColor: '#fff' }}>
                    <a className="navbar-link" style={{ backgroundColor: '#fff' }}>
                        More
                    </a>

                    <div className="navbar-dropdown is-right" style={{ backgroundColor: '#fff' }}>
                        <a className="navbar-item" href='/calculator' style={{ backgroundColor: '#fff' }}>
                            Calculator
                        </a>
                        <a className="navbar-item" href='/means' style={{ backgroundColor: '#fff' }}>
                            Calculator Means
                        </a>
                        <a className="navbar-item" href='/bookings' style={{ backgroundColor: '#fff' }}>
                            Antrian
                        </a>
                    </div>
                </div>
            </Menu>
        </nav>
    );
}

export default Navbar;