import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {loginRouter} from "../services/loginRouter.js";

export default function LoginForm(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');


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
                password: formData.password
            }

            const result = await loginRouter(payload);

            // Mostrar mensaje de éxito y redirigir después de 2 segundos
            if (result) {
                setTimeout(() => {
                    navigate('/User', {
                        data: result
                    });
                }, 2000);
            }
            else {
                setError('Error de ingreso de sesion. Corrobore los datos ingresados')
            }

        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="login-form">
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Inicio de sesión</h2>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <a href="#" className="registro">¿Has olvidado tu contraseña?</a>
                    <Link to="/register" className="registro">¿Aún no te registraste?</Link>
                </div>
                <button type="submit" className="btn-submit">Iniciar Sesión</button>
                <p>O inicia sesión con</p>
                <div>
                    <ul className="social-login">
                        <li>
                            <a href="#" className="google">
                                <i className="fa-brands fa-google"></i>
                                Sign in with Google
                            </a>
                        </li>
                        <li>
                            <a href="#" className="fb">
                                <i className="fa-brands fa-square-facebook"></i>
                                Sign in with Facebook
                            </a>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    );
}