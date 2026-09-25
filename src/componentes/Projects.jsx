import { useState } from "react"

const Projects = () => {
  const [mostrar, setMostrar] = useState(false)

  const proyectos = [
    {
      nombre: "Agenda de Contactos",
      descripcion: "Proyecto para guardar y organizar contactos.",
      extra: "Realizado con React y SQLite."
    },
    {
      nombre: "Tienda de Accesorios",
      descripcion: "Proyecto para mostrar productos y sus precios.",
      extra: "Proyecto de práctica para desarrollo web."
    }
  ]

  const mostrarInfo = () => {
    setMostrar(!mostrar)
  }

  return (
    <div className="projects">
      <h2>Mis proyectos</h2>

      <div className="projects-cards">
        {proyectos.map((proyecto) => (
          <div
            className="project-card"
            key={proyecto.nombre}
            onClick={mostrarInfo}
          >
            <h3>{proyecto.nombre}</h3>
            <p>{proyecto.descripcion}</p>

            {mostrar && <p>{proyecto.extra}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects