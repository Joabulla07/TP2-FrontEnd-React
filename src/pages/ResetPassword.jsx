import React from 'react';
import LoginHeader from "../components/LoginHeader";
import "../styles/login.css";
import Carrousel from "../components/Carrousel";
import ResetPasswordForm from "../components/ResetPasswordForm.jsx";

export default function ResetPassword() {
    return (
        <div>
            <LoginHeader/>
            <div className="login-title">
                <h1>Restablecer Contraseña</h1>
            </div>

            <div className="login-container">
                <Carrousel/>
                <ResetPasswordForm/>
            </div>
        </div>
    );
}