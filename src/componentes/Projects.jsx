const Projects = () => {
  const proyectos = [
    "Agenda de Contactos",
    "Tienda de Accesorios"
  ]

  return (
    <div>
      <h2>Mis proyectos</h2>

      {proyectos.map((proyecto) => (
        <p key={proyecto}>{proyecto}</p>
      ))}
    </div>
  )
}

export default Projects