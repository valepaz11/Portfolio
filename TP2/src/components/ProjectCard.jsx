 const ProjectsCard = (props) => {
  return (
    <div className="project-card">
      <h3>{props.nombre}</h3>
      <p>{props.descripcion}</p>
    </div>
  );
};

export default ProjectsCard;