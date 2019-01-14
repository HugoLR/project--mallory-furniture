import React, { Component } from 'react';

import Navbar from "../navbar/Navbar"
import Main from "../main/Main"
import Feature from "../feature/Feature"
import Browse from "../browse/Browse"
import Footer from "../footer/Footer"

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <React.Fragment>
        <Main />
        <Feature data={this.props.data}/>
        <Browse />
      </React.Fragment>
      )
    }
}

export default Home
