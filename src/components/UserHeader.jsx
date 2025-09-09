import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';

export default function UserHeader() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        console.log("login out")
        navigate('/login');
    };

    return (
        <Header>
            <li>
                <Link onClick={handleLogout} to="/login">Log out</Link>
            </li>
            {/* Otros elementos del header si los necesitas */}
        </Header>
    );
}
