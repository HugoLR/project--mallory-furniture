import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import request from 'superagent'
import "./category.css"

const CategoryUrl ="https://mallory-furniture-admin.now.sh/api/v1/products?category="

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category:[]
    };
  }

  componentDidMount() {
    request.get(`${CategoryUrl}${this.props.match.params.categoryType}`)
    .then((serverResult) => {
      var allProducts = serverResult.body
      this.setState({
        category:serverResult.body
      })
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.categoryType !== prevProps.match.params.categoryType) {
      request.get(`${CategoryUrl}${this.props.match.params.categoryType}`)
      .then((serverResult) => {
          this.setState({
            category:serverResult.body
          })
      })
    }
  }

  showOnSale = () => {
    var onSale = this.state.category.filter(item => item.onSale === true )
      this.setState({
        category:onSale
      })
    }

  printImages = (categoryType) => {
    switch (categoryType) {
      case 'seating':
        return require('../../images/category-seating.png')
        break
      case 'tables':
        return require('../../images/category-tables.png')
        break
      case 'desks':
        return require('../../images/category-desks.png')
        break
      case 'storage':
        return require('../../images/category-storage.png')
        break
      case 'bedroom':
        return require('../../images/category-bedroom.png')
        break
      case 'miscellaneous':
        return require('../../images/category-miscellaneous.png')
        break
    }
  }

  render() {
    return(
        <React.Fragment>
          <img className="category--image--cover" src={this.printImages(this.props.match.params.categoryType)} />
          <h2 className="category--title">{this.props.match.params.categoryType}</h2>
          <h5 className="category--subtitle">All {this.props.match.params.categoryType} products</h5>
          <div className="all--buttons">
            <button className="all--products--button all--products--first--button" onClick={() => this.componentDidMount()}>All Items</button>
            <button className="all--products--button all--products--second--button" onClick={this.showOnSale}>On Sale</button>
          </div>
          <div className="all--counter">
            <span className="all--items all--items--number">{this.state.category.length}</span><span className="all--items">items showing</span>
          </div>
          <div className="feature-product--container">
          {this.state.category.map(item => {
              return (
                <Link className="feature-produt" to={`/product/${item._id}`}>
                  <img className="feature--product--image" src={item.imageLink}  alt={item.item}/>
                  <div className="feature--product--description--container">
                    <p className="feature--product--description">{item.item}</p>
                    <span className="feature--porduct--price">${item.price}</span>
                  </div>
                </Link>
              );
          })}
          </div>
        </React.Fragment>
      )
    }
}

export default Category
