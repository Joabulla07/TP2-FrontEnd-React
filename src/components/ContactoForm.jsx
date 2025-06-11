import React from "react";

export default function ContactoForm() {
    return (
        <form className="contacto-form">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required placeholder="Ingresa tu nombre"/>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required placeholder="Ingresa tu email"/>

            <label htmlFor="telefono">Teléfono:</label>
            <input type="tel" id="telefono" name="telefono" required placeholder="Ingresa tu telefono"/>

            <div className="checkbox-group">
                <p>¿Sobre qué te gustaría consultar?</p>
                <div className="checkbox-item">
                    <input type="checkbox" id="turnos" name="consulta" value="turnos"/>
                    <label htmlFor="turnos">Turnos médicos</label>
                </div>
                <div className="checkbox-item">
                    <input type="checkbox" id="registro" name="consulta" value="registro"/>
                    <label htmlFor="registro">Cómo registrarse</label>
                </div>
                <div className="checkbox-item">
                    <input type="checkbox" id="especialidades" name="consulta" value="especialidades"/>
                    <label htmlFor="especialidades">Especialidades médicas</label>
                </div>
                <div className="checkbox-item">
                    <input type="checkbox" id="urgencias" name="consulta" value="urgencias"/>
                    <label htmlFor="urgencias">Servicio de urgencias</label>
                </div>
            </div>

            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" required placeholder="Ingresa tu mensaje"></textarea>
            <button type="submit">Enviar</button>
        </form>
    );
}