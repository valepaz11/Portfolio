const Skills = () => {
  const habilidades = ["HTML", "CSS", "JavaScript", "Rea ct", "C #"];

  return (
    <div className="skills">
      <h2>Mis habilidades</h2>

      <div className="skills-cards">
        {habilidades.map((habilidad, index) => (
          <div className="skill-card" key={index}>
            <h3>{habilidad}</h3>
            <p>Conocimientos de {habilidad}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;