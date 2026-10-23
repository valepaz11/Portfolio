import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

 const App = () => {
  return (
    <Router>
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<h1> Sobre mí </h1>} />
        <Route path="/skills" element={<h1> Habilidades </h1>} />
        <Route path="/projects" element={<h1> Proyectos </h1>} />
        <Route path="/contact" element={<h1> Contacto </h1>} />
      </Routes>
    </Router>
  );
};

export default App;