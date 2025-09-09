import React, { useEffect, useState } from 'react';
import LoginHeader from "../components/LoginHeader";
import { useLocation, useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import UserHeader from "../components/UserHeader.jsx";

export default function User() {
    const [decodedToken, setDecodedToken] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setDecodedToken(decoded);
            } catch (error) {
                console.error('Error al decodificar el token:', error);
            }
        }
    }, []);


    return (
        <div>
            <UserHeader/>
            <div>
                <h1>Bienvenido</h1>
                {decodedToken && (
                    <div>
                        <p>Email: {decodedToken.userEmail}</p>
                        {/* Otros datos del usuario */}
                    </div>
                )}
            </div>
        </div>
    );
}
