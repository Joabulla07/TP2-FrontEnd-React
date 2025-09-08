import React from 'react';
import LoginHeader from "../components/LoginHeader";
import "../styles/login.css";
import Carrousel from "../components/Carrousel";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
    return (
        <div>
            <LoginHeader/>
            <div className="login-title">
                <h1>Registro de nuevo usuario</h1>
            </div>

            <div className="login-container">
                <Carrousel/>
                <RegisterForm/>
            </div>
        </div>
    );
}
