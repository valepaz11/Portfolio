import SkillsCard from "../components/SkillCard";

const Skills = () => {
  const habilidades = ["HTML", "CSS", "JavaScript", "React", "C#"];

  return (
    <div className="skills">
      <h2>Mis habilidades</h2>

      <div className="skills-cards">
        {habilidades.map((habilidad, index) => (
          <SkillsCard
            key={index}
            nombre={habilidad}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;