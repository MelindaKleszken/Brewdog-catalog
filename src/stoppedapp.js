import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";

/*import Home from "./components/Home";*/
import Discover from "./components/Discover";
import Contact from "./components/Contact";
import Pairing from "./components/Pairing";
import NavBar from "./components/navbar";
import Cardlist from "./components/Cardlist";

function App() {
    const [data, setData] = useState("");
    const [beers, setBeers] = useState([]);


    useEffect(() => {
        fetch("https://api.punkapi.com/v2/beers/")
        .then((res) => res.json())
        .then((data) => {
            setData(data.value);
            setBeers([...beers, data.value]);
        });
    }, [beers]);
    //console.log(data);
    return(
        <div className="App">

            <h1>data</h1>

            <Router>
                <div className="App-header">
                    <NavBar />
                </div>
                <div className="content">
        
                    <Switch>
                        <Route exact path="/" > 

                            <Home />
                                <Cardlist />
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
    );
};

function Home() {
    return<h2>Welcome</h2>
  };
  

export default App;

/*    const getBeer = () => {
        fetch("https://api.punkapi.com/v2/beers/")
        .then((res) => res.json())
        .then((data) => {
            setData(data.value);
            setBeers([...beers, data.value]);
            console.log(beers);
        });
    };*/