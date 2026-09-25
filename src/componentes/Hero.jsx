import foto from "../assets/foto.jpg"

const Hero = (props) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>{props.nombre}</h1>
        <h2>{props.profesion}</h2>
       
      </div>

      <div className="hero-foto">
        <img src={foto} alt="Foto de Paz" />
      </div>
    </div>
  )
}

export default Hero