import React, {Component} from "react";


class Home extends Component {
  render() {
      return (
        
        <div>
          <h1>Here comes the home page</h1>
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
      );
    }
  }
   
  export default Home;