import React from 'react';
import {Link} from 'react-router-dom';
import {Container} from './styledComponents';

const NotFound = () => (
  <Container>
    <h1>404 Not Found</h1>
    <p className="lead">The page you are looking for doesn't exist...</p>
    <Link to="/" class="btn btn-outline-success">
      Back to Search
    </Link>
  </Container>
);

export default NotFound;
