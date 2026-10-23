import { useState } from "react";

const Contact = () => {
  const [mensaje, setMensaje] = useState(false);

  return (
    <div className="contact">
      <h1>Contacto</h1>

      <div className="contact-cards">
        <div className="contact-card">
          <h3>GitHub</h3>
          <a
            href="https://github.com/valepaz11"
            target="_blank"
            rel="noreferrer"
          >
            Mi perfil de GitHub
          </a>
        </div>

        <div className="contact-card">
          <h3>Email</h3>
          <p>Mi correo electrónico</p>
        </div>
      </div>

      <button onClick={() => setMensaje(!mensaje)}>
        Mostrar mensaje
      </button>

      {mensaje && <p>¡Gracias por visitar mi portfolio!</p>}
    </div>
  );
};

export default Contact;