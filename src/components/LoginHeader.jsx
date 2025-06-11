import React from 'react';
import Header from "./Header.jsx";
import {Link} from "react-router-dom";

export default function LoginHeader(){
    return (
        <Header>
            <li>
                <Link to="/">Home</Link>
            </li>
        </Header>
    );
}