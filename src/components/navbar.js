import React, {Component} from "react";
import '../App.css';
import beer from "../images/beer4.png" ;
import { BrowserRouter as Link} from "react-router-dom";

class NavBar extends Component {

  render() {
      return (
        <div className="navbar">
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/Discover" >Discover</Link></li>
            <li><img className="App-logo"src={beer} alt="beer logo"/></li>
            <li><Link to="/Pairing">Pairing</Link></li>
            <li><Link to="/Contact" >Contact</Link></li>
          </ul>
      </div>
      );
    };
  };
   
  export default NavBar;
