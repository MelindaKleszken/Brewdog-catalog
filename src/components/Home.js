import React, {Component} from "react";


class Home extends Component {
  render() {
      return (
        <div>
          <h1>Here comes the home page</h1>
          <img src={this.state.props.image_url} alt={this.props.name}/>
          <div className="beer-details">
            {this.state.loading ? (
              <h1>loading...</h1>
              ) : (
            <>
            <div>
              <p>Name: {this.state.props.name}</p>
              <p>About: {this.props[1].description}</p>
              <p>Best with: {this.state.props[1].food_pairing[0]}, {this.state.props[1].food_pairing[1]}</p>
            </div>
              <img src={this.state.data[1].image_url} alt={this.state.data[1].name}/>
            </>
              )}
          </div>         
        </div>
      );
    }
  }
   
  export default Home;