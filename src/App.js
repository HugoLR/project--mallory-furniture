import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "./components/home/Home";
import About from "./components/about/About";
import Terms from "./components/terms/Terms";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Allproducts from "./components/allProducts/AllProducts"
import Category from "./components/category/Category"
import Product from "./components/product/Product"
import ShoppingCart from "./components/shoppingCart/ShoppingCart"


class App extends Component {
  constructor(props) {
    super();

    this.state = {
      showmenu:false,
      productincar:[],
    };
  }

  toogleFunction = () => {
    this.setState({
      showmenu:!this.state.showmenu
    })
  }

  addProductToCar = (product) => {
    var sameProducts = this.state.productincar.filter(p => {
     return p.item === product.item
   })

   this.setState({
     productincar: [...this.state.productincar, product]
   })
  }

  removeProductToCar = (product) => {
    var newproduct = this.state.productincar.filter(p => p.item !== product.item)

    this.setState({
      productincar: newproduct
    })
  }

  render() {
    return(
      <React.Fragment>
        <Navbar  toogleFunction={this.toogleFunction}/>
        <Switch>
          <Route exact path="/" data={this.state.items}  component={Home} />
          <Route path="/about" component={About} />
          <Route path="/terms" component={Terms} />
          <Route path="/all-products" component={Allproducts} />
          <Route path="/category/:categoryType" component={Category} />
          <Route path="/product/:productId" productincar={this.state.productincar} render={(props) => <Product {...props}  addProductToCar={this.addProductToCar}/>} />
        </Switch>
        <ShoppingCart removeProductToCar={this.removeProductToCar} productincar={this.state.productincar} toogleFunction={this.toogleFunction} showmenu={this.state.showmenu}/>
        <Footer />
      </React.Fragment>
      )
    }
}

export default App
