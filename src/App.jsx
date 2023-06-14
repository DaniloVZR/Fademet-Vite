import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Galeria from "./pages/Galeria"
import Proyectos from "./pages/Proyectos"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { FademetProvider } from "./context/FademetProvider"

function App() {
  return (
    <FademetProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/Galería" Component={Galeria} />
          <Route exact path="/Proyectos" Component={Proyectos} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </FademetProvider>
  )
}

export default App
