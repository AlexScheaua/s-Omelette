import React, { Component } from 'react';
import './index.css'

class Navbar extends Component{

   menuToggle(e){
    let navMenu = document.getElementById('nav-menu');
    if(navMenu.style.display ===   'none'){
      navMenu.style.display = "block";
    } else {
      navMenu.style.display = "none";
    }
  }

  render(){
    return(
      <header id="header">
        <div id="nav-bar">
          <div id="logo-title">
            <img src="https://image.flaticon.com/icons/png/512/644/644704.png" alt="Logo" id="header-img"/>
            <h1 id="title">`s Omelletes</h1>
          </div>
          <a href="#" className='nav-button' onClick={this.menuToggle}>
            <i id="icon" className="fa fa-bars"></i>
          </a>
        </div>
        <nav id="nav-menu">
          <a href="#" className="nav-link">HOME</a>
          <a href="#" className="nav-link">PRODUCTS</a>
          <a href="#" className="nav-link">NEWSLETTER</a>
          <a href="#" className="nav-link">CONTACT</a>
        </nav>
      </header>
    )
  }
}

export default Navbar;
