import React from "react";
import ventajas from "../assets/ventajas.jpg";

export default function VentajasImg() {
    return (
        <div className="ventajas-imagen">
            <img src={ventajas} alt="ventajas"/>
        </div>
    );
}