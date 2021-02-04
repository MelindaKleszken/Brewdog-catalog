import React from "react";
import styled from 'styled-components';
//import Pair from './pairing/';

const Pairing = ({food, beer}) => {
  return (
    <Container>
      <div className="beer-info">
      {/* <h3>{beer.name}</h3> */}
      {/* <p>{(beer.food_pairing).map((pairing, index) => {
          return <Pair key={index} pairing={pairing}/>
      })}
      </p> */}
      <p>{food[0]}</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 35vh;
  width: 40vw;
  border: 1px solid black;
  margin: 3px;
  padding: 2vw;
  background-color: #68c1fd;
`;
   
  export default Pairing;
