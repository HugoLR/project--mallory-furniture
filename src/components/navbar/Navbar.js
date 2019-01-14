import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";

import "./nabvar.css"

class Navbar extends Component {
  constructor() {
    super();
  }


  render() {
    return(
      <React.Fragment>
        <div className="navigation">
          <Link className="navigation--logo" to={"/"}><img src={require('../../images/mf-logo-white.svg')} /></Link>
          <nav className="navigation--uno">
            <ul>
              <li className="navigation--element"><Link to={"/about"}>About</Link></li>
              <li className="navigation--element"><Link to="/terms">Terms+Conditions</Link></li>
              <li className="navigation--pipes">|</li>
            </ul>
          </nav>
          <nav className="navigation--dos">
            <ul>
              <li className="navigation--element"><NavLink  activeClassName="selected" to="/all-products">All</NavLink></li>
              <li className="navigation--element"><NavLink  activeClassName="active" to="/category/seating">Seating</NavLink></li>
              <li className="navigation--element"><NavLink  activeClassName="active" to="/category/tables">Tables</NavLink></li>
              <li className="navigation--element"><NavLink  activeClassName="active" to="/category/desks">Desks</NavLink></li>
              <li className="navigation--element"><NavLink  activeClassName="active" to="/category/storage">Storage</NavLink></li>
              <li className="navigation--element"><NavLink  activeClassName="active" to="/category/bedroom">Bedroom</NavLink></li>
              <li className="navigation--element"><NavLink  activeClassName="active" to="/category/miscellaneous">Misc</NavLink></li>
              <li className="navigation--pipes">|</li>
            </ul>
          </nav>
          <nav  className="navigation--tres">
            <ul >
              <button onClick={this.props.toogleFunction} className="navigation--shopping--cart--button" ><li className="navigation--cart--icon"><i className="fas fa-shopping-cart"></i></li></button>
            </ul>
          </nav>
        </div>
      </React.Fragment>
      )
    }
}

export default Navbar
