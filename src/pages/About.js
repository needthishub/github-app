import React from 'react';
import {Link} from 'react-router-dom';
import {Container} from './styledComponents';

const About = () => (
  <Container>
    <h1>About This App</h1>
    <p>App to Search Github USers</p>
    <p>Version: 1.0.0</p>
    <Link to="/" class="btn btn-outline-success">
      Back to Search
    </Link>
  </Container>
);

export default About;
