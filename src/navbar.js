import React, { Component } from 'react';
import './navbar.css'

class Navbar extends Component{

   menuToggle(e){
    let navMenu = document.getElementById('nav-menu');
    if(navMenu.style.display === ''){
      navMenu.style.display = "block";
    } else if (navMenu.style.display === 'block'){
      navMenu.style.display = "none";
    } else {
      navMenu.style.display = "block";
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
          <a href="javascript:void(0);" className='nav-button' onClick={this.menuToggle}>
            <i id="icon" className="fa fa-bars"></i>
          </a>
        </div>
        <nav id="nav-menu">
          <a href="#home" className="nav-link">HOME</a>
          <a href="#products" className="nav-link">PRODUCTS</a>
          <a href="#" className="nav-link">NEWSLETTER</a>
          <a href="#" className="nav-link">CONTACT</a>
        </nav>
      </header>
    )
  }
}

export default Navbar;
