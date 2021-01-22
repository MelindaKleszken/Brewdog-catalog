import React, { Component } from "react";

class Home extends Component {
  state = {
    data:"first",
    description: "smt",
    foodPairing: [],
    imageSrc: "none",
  }
    render() {
      return (
        <div>
          <h1>Here comes the home page</h1>
          <img src={this.state.imageSrc} alt={this.state.data}/>
        </div>
      );
    }
  }
   
  export default Home;