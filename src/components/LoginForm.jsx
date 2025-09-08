import React from 'react';
import {Link} from "react-router-dom";

export default function LoginForm(){
    return (
        <div className="login-form">
            <form>
                <div>
                    <h2>Inicio de sesión</h2>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Usuario</label>
                    <input type="email" id="exampleInputEmail1" placeholder="Ingrese su usuario"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Contraseña</label>
                    <input type="password" id="exampleInputPassword1" placeholder="Ingrese su contraseña"/>
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