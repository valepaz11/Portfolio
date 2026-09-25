import foto from '../assets/foto.jpg'
const Hero = (props) => {
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>{props.descripcion}</p>
      <img src={foto} alt="Foto de Valentina Paz" />
    </div>
  )
}

export default Hero