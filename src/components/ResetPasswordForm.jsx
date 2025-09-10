import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {resetPassword} from "../services/resetPaswordRouter.jsx";


export default function ResetPasswordForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const payload = {
                email: formData.email,
            }

            await resetPassword(payload);
            setSuccess(true);

            // Mostrar mensaje de éxito y redirigir después de 2 segundos
            setTimeout(() => {
                navigate('/login');
            }, 2000);

        } catch (error) {
            setError('Error al enviar el email de restablecimiento');
            console.log(error);
        }
    };

    if (success) {
        return (
            <div className="login-form-register">
                <div className="success-message">
                    ¡Email de restablecimiento enviado! Redirigiendo al login...
                </div>
            </div>
        );
    }

    return (
        <div className="login-form-register">
            {error && <div className="error-message">{error}</div>}
            <p>Si su email se encuentra registrado, se le enviará un link para restablecer la contraseña.</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Ingrese el email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Enviar</button>
            </form>
        </div>
    );
}