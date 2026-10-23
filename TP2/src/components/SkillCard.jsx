const SkillsCard = (props) => {
  return (
    <div className="skill-card">
      <h3>{props.nombre}</h3>
      <p>Conocimientos de {props.nombre}</p>
    </div>
  );
};

export default SkillsCard;