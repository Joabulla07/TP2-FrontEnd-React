import React from "react";
import HomeHeader from "../components/HomeHeader.jsx";
import "../styles/home.css";
import Portada from "../components/Portada";
import Cards from "../components/Cards";
import medicina from "../assets/medicos.jpg";
import urgencias from "../assets/urgencias.jpg";
import farmacias from "../assets/farmacia.jpg";
import VentajasTexto from "../components/VentajasTexto";
import VentajasImg from "../components/VentajasImg";
import Noticias from "../components/Noticias";
import ContactoForm from "../components/ContactoForm";
import Footer from "../components/Footer";
import RevealOnScroll from "../components/RevealOnScroll";

export default function Home() {
    return (
        <div>
            <HomeHeader />
            <Portada />
            <div className="cards-container">
                <RevealOnScroll>
                    <Cards img={medicina} title={"Medicina"} text={"Todas las especialidades disponibles."} />
                </RevealOnScroll>
                <RevealOnScroll>
                    <Cards img={urgencias} title={"Urgencias"} text={"Servicio de urgencias disponibles 24/7."} />
                </RevealOnScroll>
                <RevealOnScroll>
                    <Cards img={farmacias} title={"Farmacia"} text={"Contamos con servicio de farmacia."} />
                </RevealOnScroll>
            </div>

            <RevealOnScroll>
                <div className="ventajas-container" id="ventajas">
                    <VentajasImg />
                    <VentajasTexto />
                </div>
            </RevealOnScroll>

            <h1 className="noticias" id="noticias">Noticias</h1>

            <RevealOnScroll>
                <div className="noticias-container" id="noticias">
                   <Noticias />
                </div>
            </RevealOnScroll>

            <RevealOnScroll>
                <div className="contacto-container" id="contacto">
                    <h2>Dejanos tu consulta</h2>
                    <ContactoForm />
                </div>
            </RevealOnScroll>

            <Footer />
        </div>
    );
}