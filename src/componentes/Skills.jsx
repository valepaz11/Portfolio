const Skills = () => {
  const habilidades = ["HTML", "C #", "JavaScript", "React"]

  return (
    <div>
      <h2>Mis habilidades</h2>

      {habilidades.map((habilidad) => (
        <p key={habilidad}>{habilidad}</p>
      ))}
    </div>
  )
}

export default Skills