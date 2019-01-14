import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./browse.css"

class Browse extends Component {
  constructor() {
    super();
  }

  render() {
    return(
        <div className="categories">
          <h2 className="categories--title">Browse by Categories</h2>
          <h5 className="categories--subtitle">Explore by furniture type</h5>
          <div className="buttons-categories">
            <Link  className="category--button" to="/category/seating">Seating</Link>
            <Link  className="category--button" to="/category/tables">Tables</Link>
            <Link  className="category--button" to="/category/desks">Desks</Link>
            <Link  className="category--button" to="/category/bedroom">Bedroom</Link>
            <Link  className="category--button" to="/category/storage">Storage</Link>
            <Link  className="category--button" to="/category/miscellaneous">Misc</Link>
          </div>
        </div>
      )
    }
}

export default Browse
