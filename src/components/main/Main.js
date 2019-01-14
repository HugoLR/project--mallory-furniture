import React, { Component } from 'react';

import "./main.css"

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return(
        <div className="principal--section">
          <h1 className="principal--section--title">Mallory Furniture</h1>
          <h3 className="principal--section--subtitle">Your furniture is old.</h3>
          <h3 className="principal--section--subtitle">Our is older.</h3>
        </div>
      )
    }
}

export default Main
