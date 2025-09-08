import React, { useState } from "react";
import {formRouter} from "../services/formRouter.js";
import {validateEmail } from "../utils/validators.js";

export default function ContactoForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [message, setMessage] = useState("");
  const [consultas, setConsultas] = useState([]); // array de strings
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "ok" | "error" | null
  const [errorMsg, setErrorMsg] = useState("");
  const [emailError, setEmailError] = useState("");


  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    if (value === "") {
      setEmailError("");
    } else if (!validateEmail (value)) {
      setEmailError("Por favor ingresa un correo electrónico válido");
    } else {
      setEmailError("");
    }
  };

  const isFormValid = () => {
    return email && !emailError && name && message;
  };

  const toggleConsulta = (value, checked) => {
    setConsultas(prev => {
      if (checked) {
        if (prev.includes(value)) return prev;
        return [...prev, value];
      } else {
        return prev.filter(v => v !== value);
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmail (email)) {
      setEmailError("Por favor ingresa un correo electrónico válido");
      return;
    }

    setLoading(true);
    setStatus(null);
    setErrorMsg("");
    setEmailError("");

    try {
      const payload = {
        name,
        email,
        telefono,
        consultas,
        message
      };
      await formRouter(payload);

      setStatus("ok");

      setName("");
      setEmail("");
      setTelefono("");
      setMessage("");
      setConsultas([]);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err?.message || "Ocurrió un error al enviar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contacto-form">
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        placeholder="Ingresa tu nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">
        Email
      </label>
      <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="tu@email.com"
      />
      {emailError && (
          <p>{emailError}</p>
      )}

      <label htmlFor="telefono">Teléfono:</label>
      <input
        type="tel"
        id="telefono"
        name="telefono"
        required
        placeholder="Ingresa tu telefono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />

      <div className="checkbox-group">
        <p>¿Sobre qué te gustaría consultar?</p>
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="turnos"
            name="consulta"
            value="turnos"
            checked={consultas.includes("turnos")}
            onChange={(e) => toggleConsulta("turnos", e.target.checked)}
          />
          <label htmlFor="turnos">Turnos médicos</label>
        </div>
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="registro"
            name="consulta"
            value="registro"
            checked={consultas.includes("registro")}
            onChange={(e) => toggleConsulta("registro", e.target.checked)}
          />
          <label htmlFor="registro">Cómo registrarse</label>
        </div>
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="especialidades"
            name="consulta"
            value="especialidades"
            checked={consultas.includes("especialidades")}
            onChange={(e) => toggleConsulta("especialidades", e.target.checked)}
          />
          <label htmlFor="especialidades">Especialidades médicas</label>
        </div>
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="urgencias"
            name="consulta"
            value="urgencias"
            checked={consultas.includes("urgencias")}
            onChange={(e) => toggleConsulta("urgencias", e.target.checked)}
          />
          <label htmlFor="urgencias">Servicio de urgencias</label>
        </div>
      </div>

      <label htmlFor="message">Mensaje:</label>
      <textarea
        id="message"
        name="message"
        required
        placeholder="Ingresa tu mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        disabled={!isFormValid() || loading}
        className={`w-full py-2 px-4 rounded-md text-white font-medium ${
          isFormValid() && !loading
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        {loading ? "Enviando..." : "Enviar mensaje"}
      </button>

      {status === "ok" && <p className="success">¡Mensaje enviado con éxito!</p>}
      {status === "error" && <p className="error">Error: {errorMsg}</p>}
    </form>
  );
}