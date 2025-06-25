import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";


export default function HomeHeader() {
    return (
        <Header>
            <li>
                <a href="#contacto">Contacto</a>
            </li>
            <li>
                <a href="#noticias">Noticias</a>
            </li>
            <li>
                <a href="#ventajas">Ventajas</a>
            </li>
            <li>
                <Link to="/login">Ingresar/Registrarse</Link>
            </li>
        </Header>
    );
}