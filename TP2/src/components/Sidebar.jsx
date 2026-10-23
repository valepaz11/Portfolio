import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
          <Link to="/">Inicio</Link>
           <Link to="/about">Sobre mí</Link>
          <Link to="/skills">Habilidades</Link>
          <Link to="/projects">Proyectos</Link>
          <Link to="/contact">Contactos</Link>
    </div>
  );
};
export default Sidebar;