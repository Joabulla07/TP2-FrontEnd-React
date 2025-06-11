import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope as faRegularEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Footer() {
    return (
        <footer>
            <p>GestionAR</p>
            <p>
                <FontAwesomeIcon icon={faPhone} style={{marginRight: "6px"}}/>
                Tel: 17522
            </p>
            <p>
                <FontAwesomeIcon icon={faRegularEnvelope} style={{marginRight: "6px"}}/>
                 email: <a href="mailto:gestionar@gmail.com">gestionar@gmail.com</a>
            </p>
            <p>
                <FontAwesomeIcon icon={faCopyright} style={{marginRight: "6px"}}/>
                 2023 GestionAR. Todos los derechos reservados.
            </p>
        </footer>
    );
}