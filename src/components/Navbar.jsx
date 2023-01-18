import React from 'react'
import Cargar from "./Cargar.jsx";
import Consulta from "./Consulta.jsx";
import Estadistica from "./Estadistica.jsx";
import Dashboard from "./Dashboard";


import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function Navbar() {
  return (
    <Router>
      <div className="Container navbar-expand-lg navbar-dark bg-dark">
      <Link to="/Dashboard" className="btn btn-dark">
            SRPA
      </Link>
        <div className="btn-group">
          <Link to="/Cargar" className="btn btn-dark">
            Cargar
          </Link>

          <Link to="/Consulta" className="btn btn-dark">
            Consulta
          </Link>

          <Link to="/Estadistica" className="btn btn-dark">
            Estadistica
          </Link>
        </div>
      </div>
      <br />

      <Routes>
      <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Cargar" element={<Cargar />} />
        <Route path="/Consulta" element={<Consulta />} />
        <Route path="/Estadistica" element={<Estadistica />} />
      </Routes>
    </Router>
  )
}

export default Navbar