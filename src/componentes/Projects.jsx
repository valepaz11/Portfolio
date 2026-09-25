const Projects = () => {
  const proyectos = [
    {
      nombre: "Agenda de Contactos",
      descripcion: "Proyecto para guardar y organizar contactos."
    },
    {
      nombre: "Tienda de Accesorios",
      descripcion: "Proyecto para mostrar productos y sus precios."
    }
  ]

  return (
    <div className="projects">
      <h2>Mis proyectos</h2>

      {proyectos.map((proyecto) => (
        <div key={proyecto.nombre}>
          <h3>{proyecto.nombre}</h3>
          <p>{proyecto.descripcion}</p>
        </div>
      ))}
    </div>
  )
}

export default Projects