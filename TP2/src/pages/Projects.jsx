import ProjectsCard from "../components/ProjectCard";

const Projects = () => {
  const proyectos = [
    {
      nombre: "Mi Portfolio",
      descripcion: "Una página personal creada con React y CSS."
    },
    {
      nombre: "Agenda de Contactos",
      descripcion: "Una aplicación para guardar y organizar contactos."
    },
    {
      nombre: "Sistema de Stock",
      descripcion: "Un sistema para administrar productos y ventas."
    }
  ];

  return (
    <div className="projects">
      <h2>Mis proyectos</h2>

      <div className="projects-cards">
        {proyectos.map((proyecto, index) => (
          <ProjectsCard
            key={index}
            nombre={proyecto.nombre}
            descripcion={proyecto.descripcion}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;