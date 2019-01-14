import React, { Component } from 'react';

import "./about.css"

class About extends Component {
  constructor() {
    super();
  }

  render() {
    return(
        <React.Fragment>
          <h1 className="about--tittle">About</h1>
          <div className="about--container">
            <div>
              <h2 className="about--subtittle">Welcome inside our company</h2>
              <p>We are a values-driven company with a passion for life at home. Every product we create is our idea for making home a better place. At the IKEA Group, we have 355 stores in 29 countries*.</p>
            </div>
            <div>
              <h2 className="about--subtittle">Vision and business idea</h2>
              <p>“To create a better everyday life for the many people”, this is the IKEA vision. Our business idea is “to offer a wide range of well-designed, functional home furnishing products at prices so low that as many people as possible will be able to afford them”.</p>
            </div>
            <div>
              <h2 className="about--subtittle">Sustainable growth</h2>
              <p>“To create a better everyday life for the many people”, this is the IKEA vision. The main financial principle of the IKEA Group is to grow by using our own resources. In other words, we earn our money before we spend it. This makes it possible for us to make long-term investments for the future</p>
            </div>
            <div>
              <h2 className="about--subtittle">Key figures</h2>
              <p>Every year we renew our range, launching approximately 2,500 new products, designed by our in-house and contracted designers.</p>
            </div>
            <div>
              <h2 className="about--subtittle">Ownership & structure</h2>
              <p>The IKEA Group of companies (Ingka Holding B.V. and its controlled entities) has an ownership structure that ensures independence and a long-term approach. Stichting Ingka Foundation in the Netherlands is our owner, and its funds can be used in only two ways: it can be reinvested in the IKEA Group or donated for charitable purposes through the Stichting IKEA Foundation.</p>
            </div>
            <div>
              <h2 className="about--subtittle">Organisation</h2>
              <p>The IKEA Group of companies (INGKA Holding B.V. and its controlled entities) has an ownership structure that ensures independence and a long-term approach.</p>
            </div>
          </div>
        </React.Fragment>
      )
    }
}

export default About
