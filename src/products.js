import React, { Component } from 'react';
import './products.css'
import img1 from './resources/Mobile/1.png'
import img2 from './resources/Mobile/2.png'
import img3 from './resources/Mobile/3.png'
import img4 from './resources/Mobile/4.png'

class Products extends Component{

  render(){
    return(
      <div className="prods">
        <div className="product">
          <p className="imgTitle">Cheese & Ham</p>
          <img src={img1} alt="" className='prodimgs' />
          <p className="imgIngredients">Ingredients: 3 eggs, 40g Cheddar, 40g Ham <br/>Price: --</p>
        </div>
        <div className="product">
          <p className="imgTitle right">Classic</p>
          <img src={img2} alt="" className='prodimgs' />
          <p className="imgIngredients right">Ingredients: 3 eggs, bassil <br/>Price: --</p>
        </div>
        <div className="product">
          <p className="imgTitle">French</p>
          <img src={img3} alt="" className='prodimgs' />
          <p className="imgIngredients">Ingredients: 3 eggs, green onions, butter<br/>Price: --</p>
        </div>
        <div className="product">
          <p className="imgTitle right">Vegetables</p>
          <img src={img4} alt="" className='prodimgs' />
          <p className="imgIngredients right">Ingredients: 3 eggs, onion, tomatoe, mushrooms<br/>Price: --</p>
        </div>
      </div>
    )
  }
}

export default Products;
