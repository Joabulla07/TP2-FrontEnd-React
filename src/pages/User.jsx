import React, { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';
import UserHeader from "../components/UserHeader.jsx";

export default function User() {
    const [decodedToken, setDecodedToken] = useState(null);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
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
