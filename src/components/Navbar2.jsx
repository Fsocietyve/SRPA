import React from 'react'

function Navbar2() {

  return (
    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark ">
    <a class="navbar-brand" href="#">ENC</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="./src/components/Cargar.jsx">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./src/components/Consulta.jsx">Mapa logico</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./src/components/Estadistica.jsx">Inventario</a>
        </li>
      </ul>
    </div>
    
  </nav>
  )
}

export default Navbar2
