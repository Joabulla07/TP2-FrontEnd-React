import React, { useState, useEffect } from 'react';
import '../styles/login.css';
import medico from '../assets/medico_y_paciente.jpg';
import urgencias from '../assets/urgencias.jpg';
import farmacias from '../assets/farmacias.jpeg';

export default function Carrousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        medico,
        urgencias,
        farmacias
    ];

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="carousel-container">
            <div
                className="carousel-images"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`
                }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="carousel-image"
                    />
                ))}
            </div>

            <div className="carousel-controls">
                <button className="carousel-control" onClick={goToPrevious}>
                    ❮
                </button>
                <button className="carousel-control" onClick={goToNext}>
                    ❯
                </button>
            </div>

            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
}