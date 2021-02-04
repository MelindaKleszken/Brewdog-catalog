import React from 'react';
import styled from 'styled-components';

const Card = ({beer}) => {
 return (
    <Container>
    <img src={beer.image_url} alt={beer.title} />
    <div className="beer-info">
    <h3>{beer.name}</h3>
    <p>{beer.description}</p>
    </div>
    </Container>
    )
}

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

export default Card;