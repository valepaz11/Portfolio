const Skills = () => {
  const habilidades = [
    {
      nombre: "HTML",
      descripcion: "Estructura de páginas web"
    },
    {
      nombre: "CSS",
      descripcion: "Diseño y estilos"
    },
    {
      nombre: "JavaScript",
      descripcion: "Programación web"
    },
    {
      nombre: "C #",
      descripcion: "Programación"
    }
  ]

  return (
    <div className="skills">
      <h2>Mis habilidades</h2>

      <div className="skills-cards">
        {habilidades.map((habilidad) => (
          <div className="skill-card" key={habilidad.nombre}>
            <h3>{habilidad.nombre}</h3>
            <p>{habilidad.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills