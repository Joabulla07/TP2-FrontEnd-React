import React from "react";
import turno from "../assets/turno.jpg";


export default function Noticias() {
    return (
        <>
            <div className="noticias-card">
                <div className="card-content">
                    <h3>CONSULTORIOS MÁS CERCANOS</h3>
                    <p>Consulta por tu consultorio más cercano.</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7080.839363337465!2d-59.00589693760377!3d-27.456190823519265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1599654025043!5m2!1ses!2sar"
                        className="map"
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        title="Mapa de consultorios cercanos"
                    ></iframe>
                </div>
            </div>
            <div className="noticias-card">
                <div className="card-content">
                    <h3>SOLICITAR TURNO</h3>
                    <img src={turno} alt="Solicitar turno" className="turno-imagen"/>
                    <h4 style={{ textAlign: "center" }}>¿Cómo solicitar turno?</h4>
                    <p>¡Creá un usuario y ya podés sacar turno!</p>
                    <button className="registro-btn" onClick={() => window.location.href = "/login"}
                    >Registrarse
                    </button>
                </div>
            </div>
        </>
    );
}