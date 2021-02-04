import React from 'react';
import styled from 'styled-components';

const Pair = ({beer, pairing}) => {
return (
    <Container>
    <p>{beer.pairing}</p>
    </Container>
    )
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 15vh;
  width: 40vw;
  border: 1px solid black;
  margin: 3px;
  padding: 2vw;
  background-color: #68c1fd;
`;

export default Pair;