import React, { useEffect, useState } from "react";

 export default function RevealOnScroll ({ children }){
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const reveals = document.querySelectorAll('.reveal');

        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
                setIsVisible(true);
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`reveal ${isVisible ? 'active' : ''}`}>
            {children}
        </div>
    );
};
