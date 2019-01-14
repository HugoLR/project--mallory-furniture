import React, { Component } from 'react';
import { Link } from "react-router-dom";

import request from 'superagent';

import "./feature.css"

const URL = 'https://mallory-furniture-admin.now.sh/api/v1/products'

class Feature extends Component {
  constructor() {
    super();

    this.state = {
      items:[]
    };
  }

  componentDidMount() {
    request.get(URL)
    .then((serverResult) => {
      console.log(serverResult.body)
      this.setState({
        items:serverResult.body
      })
    })
  }

  render() {
    return(
      <div className="feature--container">
        <h2 className="feature--title">Featured Products</h2>
        <h5 className="feauture--subtitle">Check out some of our favorite listings</h5>
        <div className="feature-product--container">
          {this.state.items.map(item => {
            if(item.featured === true){
              return (
              <Link className="feature-produt" to={`/product/${item._id}`}>
                <img className="feature--product--image" src={item.imageLink}  alt={item.item}/>
                <div className="feature--product--description--container">
                  <p className="feature--product--description">{item.item}</p>
                  <span className="feature--porduct--price">${item.price}</span>
                </div>
              </Link>
              )
            }
          })}
        </div>
        <div className="button-wrapper">
          <Link to="/all-products"><button className="all-button">All products</button></Link>
        </div>
      </div>
      )
    }
}

export default Feature
