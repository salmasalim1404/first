import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <>
  
  <nav className="navbar navbar-expand-lg py-4">
  <div className="container">
    <a className="navbar-brand fw-bolder fs-2 text-white" href="#">START FRAMEWORK</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link fw-bold fs-5 text-white me-3 active" aria-current="page" to={'/home'}>Home </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold fs-5 text-white me-3 " aria-current="page" to={'/about'}>About </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold fs-5 text-white me-3 " to={'/portofolio'}>Portofolio </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bold fs-5 text-white me-3 "to={'/contact'}>Contact </Link>
        </li>
       
       
      </ul>
  
    </div>
  </div>
</nav>
  
  </>
}



{/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link fw-bolder fs-4  active" aria-current="page" href="#">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Portofolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Contact</Link>
        </li>
     
      
      </ul>
   
    </div>
  </div>
</nav> */}