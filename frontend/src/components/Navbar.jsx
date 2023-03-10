import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return <>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" >Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link to="/" class="nav-link active" >Home</Link>
          <Link to="/multi-img-upload" class="nav-link" >multi</Link>
          <Link to="/single-img-upload" class="nav-link" >single</Link>
          <Link to="/Doc-upload" class="nav-link" >multiDoc</Link>
          <Link to="/axi" class="nav-link" >axi</Link>
        </div>
      </div>
    </div>
  </nav>
  </>
}

export default Navbar