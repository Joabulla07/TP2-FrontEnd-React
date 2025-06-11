import React from "react";

export default function VentajasTexto() {
    console.log("VentajasTexto se está renderizando");
    return (
        <div className="ventajas-texto">
            <h1 className="ventajas">Ventajas</h1>
            <p>Nuestra plataforma ofrece una solución integral para la gestión de turnos médicos, brindando una
                experiencia eficiente tanto para pacientes como para profesionales de la salud.</p>
            <ul className="ventajas-lista">
                <li>Gestión de turnos simplificada</li>
                <li>Acceso 24/7 desde cualquier dispositivo</li>
                <li>Recordatorios automáticos</li>
                <li>Historial médico digitalizado</li>
            </ul>
        </div>
    );
}