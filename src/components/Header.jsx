import React from 'react';
import logo from "../assets/logoGestionar.png";

export default function Header({children}){
    return (
        <nav>
            <ul className="navbar">
                <li className="left-logo">
                    <img className="logo" src={logo} alt="logo" />
                </li>
                <li className="left-logo">
                    <h2 className="h2">GestionAR</h2>
                </li>
                {children}
            </ul>
        </nav>
    );
}