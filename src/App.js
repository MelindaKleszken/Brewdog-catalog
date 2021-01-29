import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

/*import Home from "./components/Home";*/
import Discover from "./components/Discover";
import Contact from "./components/Contact";
import Pairing from "./components/Pairing";
import NavBar from "./components/navbar";
//import Home from "./components/Home";

class App extends React.Component {
  state = {
    data: [],
    name:"hn",
    loading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
      .then((res) => res.json())
      .then((data) => {
        this.setState({data: data, loading: false});
        //console.log({data});
      });
    },1000);
  }
  componentDidUpdate(){
    console.log("new value= " + this.state.data[1].name);
  }


  render() {
    
    return (
      <div className="App">
      <Router>
        <div className="App-header">
          <NavBar />
        </div>
        <div className="content">
        
        <Switch>
              <Route exact path="/" component="Home"> 
                <Home />
                <div>
                  <div className="beer-details">
                    {this.state.loading ? (
                      <h1>loading...</h1>
                      ) : (
                    <>
                      <img src={this.state.data[1].image_url} alt={this.state.data[1].name}/>
                      <div className="beer-info">
                      <p>Name: {this.state.data[1].name}</p>
                      <p>About: {this.state.data[1].description}</p>
                      <p>Best with: {this.state.data[1].food_pairing[0]}, {this.state.data[1].food_pairing[1]}</p>
                      </div>
                      
                    </>
                      )}
                  </div>         
                </div>
                
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
      
    </div>
      
    )
  };

  
};


const Home = (props) => {
  return (
    <div>
      <h2>Home page</h2>
    </div>
  );
};


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