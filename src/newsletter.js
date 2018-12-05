import React, { Component } from 'react';
import './newsletter.css'


class Newsletter extends Component {
  handleSubmit =(e)=>{
    alert('We have saved your email, and we will contact you with news :)');
    e.preventDefault();
  }

  render (){
    return (
      <div className="newslett">
        <h3 className="newslett-title">Want to have news about the launch? <br /> Subscribe to our Newsletter</h3>
        <form action="" id="newslett-input">
          <input type="email" id="newslett-email"/>
          <button type='submit' onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default Newsletter;
