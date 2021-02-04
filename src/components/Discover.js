import React from "react";
import styled from 'styled-components';
import CardList from './Cardlist';

const Discover = () => {
  return (
    <Container>
    <h1>Here comes the discover part.</h1>
    <CardList />
    </Container>
  );
};

const Container = styled.div`
    height: 200px;
    width: 250px;
    border: 1px solid black;
    margin: 3px;
`;
   
  export default Discover;
