import React, { Component } from 'react';
import './products.css'
import img1 from './resources/Mobile/1.png'
import img2 from './resources/Mobile/2.png'
import img3 from './resources/Mobile/3.png'
import img4 from './resources/Mobile/4.png'

class Products extends Component{

  active = (e) => {
      let selector = e.target.className[0];
      let image = document.getElementsByClassName(selector)[0];
      let paragraph = document.getElementsByClassName(selector)[1];
      paragraph.style.display = "block";
      image.classList.add('prodimgsactive')
  }

  inactive = (e) => {
      let selector = e.target.className[0];
      let image = document.getElementsByClassName(selector)[0];
      let paragraph = document.getElementsByClassName(selector)[1];
      paragraph.style.display = "none";
      image.classList.remove('prodimgsactive')
  }

  render(){
    return(
      <div className="prods">
        <div className="product">
          <p className="imgTitle">Cheese & Ham</p>
          <img src={img1} alt="" className='1 prodimgs' onMouseEnter={this.active} onMouseLeave={this.inactive} />
          <p className="1 imgIngredients">Ingredients: 3 eggs, 40g Cheddar, 40g Ham <br/>Price: --</p>
        </div>
        <div className="product">
          <p className="imgTitle right">Classic</p>
          <img src={img2} alt="" className='2 prodimgs' onMouseEnter={this.active} onMouseLeave={this.inactive} />
          <p className="2 imgIngredients right">Ingredients: 3 eggs, bassil <br/>Price: --</p>
        </div>
        <div className="product">
          <p className="imgTitle">French</p>
          <img src={img3} alt="" className='3 prodimgs' onMouseEnter={this.active} onMouseLeave={this.inactive} />
          <p className="3 imgIngredients">Ingredients: 3 eggs, green onions, butter<br/>Price: --</p>
        </div>
        <div className="product">
          <p className="imgTitle right">Vegetables</p>
          <img src={img4} alt="" className='4 prodimgs' onMouseEnter={this.active} onMouseLeave={this.inactive} />
          <p className="4 imgIngredients right">Ingredients: 3 eggs, onion, tomato, mushrooms<br/>Price: --</p>
        </div>
      </div>
    )
  }
}

export default Products;
