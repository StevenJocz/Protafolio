
import './App.css'
import Contacto from './components/Contacto'
import Empresas from './components/Empresas'
import Experiencia from './components/Experiencia'
import Footer from './components/Footer'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Portafolio from './components/Portafolio'
import Servicios from './components/Servicios'
import Testimonios from './components/Testimonios'

function App() {

  return (
    <>
      < NavBar/>
      < Header/>
      < Empresas/>
      < Experiencia/>
      < Servicios/>
      < Portafolio/>
      < Testimonios/>
      < Contacto/>
      <Footer/>
    </>
  )
}

export default App
