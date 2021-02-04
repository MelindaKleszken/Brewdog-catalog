//////Beer Catalog React app
import './App.css';
import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import styled from 'styled-components';

/*import Home from "./components/Home";*/
//import Discover from "./components/Discover";
import Contact from "./components/Contact";
import Pairing from "./components/Pairing";
import NavBar from "./components/navbar";
import Home from "./components/Home";
import Card from './components/Card';

const App = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetchBeers(setBeers);
  }, []);
  
  const fetchBeers = async (index) => {
    const response = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80');
    const data = await response.json();
    console.log(data);
    setBeers(data);
  };

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

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// const Home = (props) => {
//   return (
//     <div>
//       <h2>Home page</h2>
//     </div>
//   );
// };


/*
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
  
const Home = (props) => {
  return (
    <div>
      <h2>Welcome</h2>
    </div>
  );
};
    line 31 will look like: this.setState({ data: data })
  state = { data: [] }
*/

export default App;