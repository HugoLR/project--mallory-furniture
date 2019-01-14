import React, { Component } from 'react';
import { Link } from "react-router-dom";


import request from 'superagent';
import "./allproducts.css"

const URL = 'https://mallory-furniture-admin.now.sh/api/v1/products'

class Allproducts extends Component {
  constructor() {
    super();

    this.state = {
      items:[]
    };
  }

  componentDidMount() {
    request.get(URL)
    .then((serverResult) => {
      var allProducts = serverResult.body
      this.setState({
        items:serverResult.body
      })
    })
  }

  showOnSale = () => {
    var onSale = this.state.items.filter(item => item.onSale === true )
      this.setState({
        items:onSale
      })
    }

  render() {
    console.log(this.state.items)
    return(
      <div className="all--container">
        <h2 className="all--products--title">All Products</h2>
        <h5 className="all--products--subtitle">All available listings</h5>
        <div className="all--buttons">
          <button className="all--products--button all--products--first--button" onClick={() => this.componentDidMount()}>All Items</button>
          <button className="all--products--button all--products--second--button" onClick={this.showOnSale}>On Sale</button>
        </div>
        <div className="all--counter">
          <span className="all--items all--items--number">{this.state.items.length}</span><span className="all--items">items showing</span>
        </div>
        <div className="feature-product--container">
        {this.state.items.map(item => {
            return (
              <Link className="feature-produt" to={`/product/${item._id}`}>
                <img className="feature--product--image" src={item.imageLink}  alt={item.item}/>
                <div className="feature--product--description--container">
                  <p className="feature--product--description">{item.item}</p>
                  <p className="feature--product--type">{item.category}</p>
                  <span className="feature--porduct--price">${item.price}</span>
                </div>
              </Link>
            );
        })}
        </div>
      </div>
      )
    }
}

export default Allproducts
