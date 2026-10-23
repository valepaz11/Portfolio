import foto from "../assets/foto.jpg";
const Home = () => {    
    return(
        <div>
            <div className="hero-foto">

               <h1>Paz Valentina</h1>
               <p>Estudiante de Programacion</p>
               
             </div>   

              <div className="hero-foto">
              <img src={foto} alt="Mi foto"/>
             </div>
        </div>           
    );
}

export default Home;
