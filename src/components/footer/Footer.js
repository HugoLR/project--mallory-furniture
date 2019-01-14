import React, { Component } from 'react';
import { Link } from "react-router-dom"

import "./footer.css"

class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className="footer">
        <div className="footer-img">
          <img src={require('../../images/mf-logo-black.svg')}  width="100"/>
        </div>
        <div className="footer-elements">
          <ul className="footer-list">
            <Link to={"/"}><li className="footer-list--first">Company</li></Link>
            <Link to={"/about"}><li className="footer--list-item">About</li></Link>
            <Link to={"/about"}><li className="footer--list-item">Press</li></Link>
            <Link to="/terms"><li className="footer--list-item">Terms+Conditions</li></Link>
          </ul>
          <ul className="footer-list">
            <Link to=""><li className="footer-list--first">Categories</li></Link>
            <Link to="/category/seating"><li className="footer--list-item">Seating</li></Link>
            <Link to="/category/tables"><li className="footer--list-item">Tables</li></Link>
            <Link to="/category/miscellaneous"><li className="footer--list-item">Misc</li></Link>
          </ul>
          <div className="media">
            <ul>
              <li className="footer-list--first">Social</li>
            </ul>
            <ul className="media-list">
              <li className="media--list--element"><i className="fab fa-instagram"></i></li>
              <li className="media--list--element"><i className="fab fa-twitter"></i></li>
              <li className="media--list--element"><i className="fab fa-pinterest"></i></li>
            </ul>
          </div>
        </div>
      </div>
      )
    }
}

export default Footer
