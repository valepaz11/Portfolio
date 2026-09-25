import Header from "./componentes/Header"
import Hero from "./componentes/Hero"
import About from "./componentes/About"
import Skills from "./componentes/Skills"
import Projects from "./componentes/Projects"
import Footer from "./componentes/Footer"
const App = () => {
  return (
    <div>
     <Header />
     <Hero
      nombre="Paz Valentina"
      profesion="Estudiante de Programación"
      
     />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App