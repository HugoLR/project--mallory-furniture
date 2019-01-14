import React, { Component } from 'react';

import "./product.css"

import request from 'superagent';
const ProductUrl = "https://mallory-furniture-admin.now.sh/api/v1/products/"

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    }
  }

  componentDidMount() {
    request.get(`${ProductUrl}${this.props.match.params.productId}`)
    .then((serverResult) => {
      // console.log(serverResult.body)
      var allProducts = serverResult.body
      this.setState({
        product:serverResult.body
      })
    })
  }


  render() {
    return(
      <div className="product--container">
        <img className="product--image" src={this.state.product.imageLink} />
        <div className="product--information--container">
          <div className="product--information">
            <h3 className="product--title">{this.state.product.item}</h3>
            <span className="product--price">${this.state.product.price}</span>
          </div>
          <div className="product--additional--information">
            <div className="product--condition">
              <p className="product--condition--title">condition</p>
              <p className="product--condition--state">{this.state.product.condition}</p>
            </div>
            <div className="product--measurements--container">
              <p className="product--measurements--title">Measurements</p>
              <div className="product--measurements">
                <p className="product--measurements--states">W:{this.state.product.width}</p>
                <p className="product--measurements--states">L:{this.state.product.length}</p>
                <p className="product--measurements--states">H:{this.state.product.height}</p>
              </div>
            </div>
            <button onClick={() => this.props.addProductToCar(this.state.product)} className="product--button">Add to Cart</button>
          </div>
        </div>
      </div>
      )
    }
}

export default Product
