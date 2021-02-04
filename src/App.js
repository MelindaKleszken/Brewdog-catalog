import './App.css';
import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import styled from 'styled-components';

import Contact from "./components/contact";
//import Pairing from "./components/Pairing";
import NavBar from "./components/navbar";
import Home from "./components/Home";
import Card from './components/Card.js';

const App = () => {
  const [beers, setBeers] = useState([]);
  const [foods, setFoods] = useState('');

  useEffect(() => {
    fetchBeers(setBeers);
    // fetchFood(setFoods);
  }, []);
  
  const fetchBeers = async (index) => {
    const response = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80');
    const data = await response.json();
    //console.log(data);
    setBeers(data);
  };

  //get all the food_pairing
  // const fetchFood = async (index) => {
  //   const response = await fetch('https://api.punkapi.com/v2/beers?food');
  //   const data = await response.json();
  //   console.log(data);
  //   setFoods(data);
  // };

    return (
      <div className="App">
        <Router>
          <div className="App-header">
            <NavBar />
          </div>
          <div className="content">
          
            <Switch>
              <Route exact path="/"> 
                <Home />                
              </Route>
              <Route path="/Discover">
                <Discover />
                  <Container>
                  {beers.map((beer, index) => {
                    return <Card key={index} beer={beer}/>
                  })}
                  </Container>

              </Route>
              <Route path="/Pairing">
                <Pairing />
                  <Container>
                    {/* {foods.map((beer, index, food) => {
                      return <Pairing key={index} food={food} beer={beer}/>
                    })} */}
                  </Container>
              </Route>
              <Route path="/Contact">
                <Contact />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
};

const Discover = () => {
  return (
    <h1>Discover</h1>
  );
};

const Pairing = () => {
  return (
    <h1>Pairing</h1>
  );
};

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;


export default App;