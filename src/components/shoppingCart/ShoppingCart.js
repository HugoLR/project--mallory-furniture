import React, { Component } from "react";

import "./shoppingcart.css"

class ShoppingCart extends Component {
  calculateTotal() {
    const prices = this.props.cart.map(p => p.regularPrice);

    return prices.reduce((a, b) => a + b, 0).toFixed(2);
  }

  render() {
    console.log(this.props)
    return (
      <aside>
        <div className={(this.props.showmenu)? "ShoppingCart is-visible" : "ShoppingCart"}>
          <header className="ShoppingCart__header">
              <h3 className="ShoppingCart__title">Your Cart</h3>
              <button className="ShoppingCart__close" onClick={this.props.toogleFunction}>
                <img src="https://cdn3.iconfinder.com/data/icons/interface/100/close_button-512.png" />
              </button>
          </header>
          <div className={(this.props.productincar.length === 0)? "No__items" : "Cart__items"}>
            <p className="Remainder">No items in cart</p>
          </div>
          <div>
            <ul className="ShoppingCart__list">
            {
              this.props.productincar.map(p =>{
                return (
                  <li className="Item">
                    <div className="Item__image--container">
                      <img className="Item__image"src={p.imageLink} />
                    </div>
                    <button className="Item__button" onClick={()=> this.props.removeProductToCar(p)}><i class="fas fa-times"></i></button>
                    <div className="Item__description">
                      <h3 className="Item__description__item">{p.item}</h3>
                      <span className="Item__description__category">{p.category}</span>
                      <div className="Item__price__container">
                        <p className="Item__price">${p.price}</p>
                      </div>
                    </div>
                  </li>
                )
              })
            }

            </ul>
          </div>
        </div>
      </aside>
    );
  }
}

export default ShoppingCart;
