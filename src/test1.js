import React, { Component } from 'react';
import Second from './Second'

class First extends Component {
  state = {
    name: 'Alex',
    age: 26,
    car: 'Dacia Logan',
    laptop: 'Lenovo e580',
    people: [
      {name:'Bogdan', age:'20', id:1},
      {name:'Andrei', age:'23', id:2},
      {name:'Andreea', age:'26', id:3}
    ]
  }

  handleChange =(e)=> {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit=(e)=> {
    e.preventDefault();
    console.log('form submited', this.state.name);
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <p>My name is: { this.state.name } and i am { this.state.age } years old!</p>
        <p>I have a { this.state.car } and i am writing this from my { this.state.laptop }</p>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
        <Second people={ this.state.people }/>
      </div>
    );
  }
}

export default First;
