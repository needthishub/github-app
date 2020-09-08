import React from 'react';
import {Container, Title, Menu} from './styledComponents';

const Navigation = () => (
  <Container>
    <Title>Github Search</Title>
    <Menu to="/">Search</Menu>
    <Menu to="/about">About</Menu>
  </Container>
);

export default Navigation;
