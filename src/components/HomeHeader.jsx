import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoGestionar.png";
import Header from "./Header.jsx";

// export default function HomeHeader() {
//     return (
//         <nav>
//             <ul className="navbar">
//                 <li className="left-logo">
//                     <img className="logo" src={logo} alt="logo" />
//                 </li>
//                 <li className="left-logo">
//                     <h2 className="h2">GestionAR</h2>
//                 </li>
//                 <li>
//                     <a href="#contacto">Contacto</a>
//                 </li>
//                 <li>
//                     <a href="#noticias">Noticias</a>
//                 </li>
//                 <li>
//                     <a href="#ventajas">Ventajas</a>
//                 </li>
//                 <li>
//                     <Link to="/login">Ingresar/Registrarse</Link>
//                 </li>
//             </ul>
//         </nav>
//     );
// }

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