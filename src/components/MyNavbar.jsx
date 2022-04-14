import { Navbar } from "react-bootstrap"

const MyNavbar = () => {
   return( <Navbar className="p-none">
    <Navbar.Brand href="/"><img className="nav-image" src="/Sunset_logo.png" alt="sunset-logo" /> SUNSET - WeatherLand</Navbar.Brand>
  </Navbar>)
}

export default MyNavbar