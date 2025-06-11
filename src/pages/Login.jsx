import React from 'react';
import LoginHeader from "../components/LoginHeader.jsx";
import "../styles/login.css";
import Carrousel from "../components/Carrousel.jsx";
import LoginForm from "../components/LoginForm.jsx";

export default function Login(){
    return (
        <div>
            <LoginHeader/>
            <div className="login-title">
                <h1>Para conocer nuestros servicios, registrate e inicia sesion</h1>
            </div>

            <div className="login-container">
                <Carrousel/>
                <LoginForm/>
            </div>
        </div>
    );
}