import './App.css';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home";
import Discover from "./Discover";
import Contact from "./Contact";
import Pairing from "./Pairing";

class App extends React.Component {
  state = {
    data:"first",
    description: "smt",
    foodPairing: [],
    imageSrc: "none",
    loading: true
  };


  componentDidMount() {
    setTimeout(() => {
      fetch("https://api.punkapi.com/v2/beers/")
      .then((res) => res.json())
      .then((data) => {
        this.setState({data: data[3].name, loading: false, description: data[3].description, foodPairing: data[3].food_pairing, imageSrc: data[3].image_url});
        console.log({data});
      });
    },1000);
  }
  componentDidUpdate(){
    console.log("new value= " + this.state.data)
  }


  render() {
    
    return (
      <div className="App">

      <Router>
        <div className="App-header">
          
        <div className="navbar">
            <ul>
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/Discover" >Discover</Link></li>
              <li><Link to="/Pairing">Pairing</Link></li>
              <li><Link to="/Contact" >Contact</Link></li>
            </ul>


          </div>
          
        </div>
        
      
      <div className="content">
        
        <Switch>
              <Route exact path="/" > 
                <Home />
              </Route>
              <Route path="/Discover">
                <Discover />
              </Route>
              <Route path="/Pairing">
                <Pairing />
              </Route>
              <Route path="/Contact">
                <Contact />
              </Route>
            </Switch>
      </div>
      </Router>
      <div className="beer-details">
        {this.state.loading ? (
          <h1>loading...</h1>
          ) : (
        <>
          <p>Name: {this.state.data}</p>
          <p>About: {this.state.description}</p>
          <p>Best with: {this.state.foodPairing[0]}, {this.state.foodPairing[1]}</p>
          <img src={this.state.imageSrc} alt={this.state.data}/>
        </>
          )}
      </div>
    </div>
      
    )
  };

  
};

/*
function Pairing() {
  return (
    <div>
      <h2>Pairing</h2>
    </div>
  );
}
*/

export default App;
