import React from "react";

export const Navbar = () => {
  return(
    
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  
  <div className="container">
    
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <a className="navbar-brand mt-2 mt-lg-0" href="/">
        <img
          src="/assets/img/logo.png.png"
          height='50px'
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-uppercase text-white mr-0" href="/">Home</a>
        </li>
      </ul>
    </div>
    
    </div>
    </nav>
    
    
  )
  
};
