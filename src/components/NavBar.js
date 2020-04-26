import React from 'react';
import '../styles/navbar.css'

const NavBar = () => (
    <nav className="navigation">
        <ul className="navbar">
            <li className="logo"><a href="#">Tulye.com</a></li>
            <li className="nav-item"><a href="#">SignIn</a></li>
            <li className="nav-item"><a href="#">SignUp</a></li>
        </ul>
    </nav>
);

export default NavBar;
