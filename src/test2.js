import React, { Component } from 'react';

class Second extends Component{
  render(){
    const people = this.props.people
    const peopleList = people.map(pupil => {
      return (
        <div className="Second" key={pupil.id}>
          <p> { pupil.name } { pupil.age } </p>
        </div>
      )
    })
    return(
      <div className="peopleList">
        { peopleList }
      </div>
    )
  }
}

export default Second;
