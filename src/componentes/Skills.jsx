import { useState } from "react"

const Skills = () => {
  const [mostrar, setMostrar] = useState(false)

  const habilidades = ["HTML", "JavaScript", "C  #"]

  const mostrarHabilidades = () => {
    setMostrar(!mostrar)
  }

  return (
    <div className="skills">
      <h2>Mis habilidades</h2>

      <button onClick={mostrarHabilidades}>
        Ver habilidades
      </button>

      {mostrar && (
        <div>
          {habilidades.map((habilidad) => (
            <p key={habilidad}>{habilidad}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default Skills