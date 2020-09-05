import React from 'react';
import {Container, Title, Menu} from './styledComponents';

function Navigation() {
  return (
    <Container>
      <Title>Github Search</Title>
      <Menu to="/">Search</Menu>
      <Menu to="/about">About</Menu>
    </Container>
  );
}

export default Navigation;
