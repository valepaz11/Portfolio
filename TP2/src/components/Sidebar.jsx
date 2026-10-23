import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div>
          <NavLink to="/">Inicio</NavLink>
           <NavLink to="/about">Sobre mí</NavLink>
          <NavLink to="/skills">Habilidades</NavLink>
          <NavLink to="/projects">Proyectos</NavLink>
          <NavLink to="/contact">Contactos</NavLink>
    </div>
  );
};
export default Sidebar;