import React, { Component } from 'react';
import './home.css'
import video from './resources/Ow9pGXT3KwY.mp4'

class Home extends Component{

  render(){
    return(
      <div>
        <div id="video">
        <video id="video" autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        </div>
        <div id="about">
        <h4 className="about-title">Who are we?</h4>
        <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    )
  }
}

export default Home;
