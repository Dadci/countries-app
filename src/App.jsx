import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CountryDetail from "./pages/CountryDetail"
import Navbar from "./components/Navbar"



function App() {
  
  return (
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/country`} element={<CountryDetail />} />
        </Routes>
      </BrowserRouter>

    
  )
}

export default App
