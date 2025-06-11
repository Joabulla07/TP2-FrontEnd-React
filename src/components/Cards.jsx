import React from "react";

export default function Cards({img, title, text}) {
    return (

        <div className="card">
                <img src={img} alt="Card" className="card-image"/>
                <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{text}</p>
                </div>
        </div>

    );
}