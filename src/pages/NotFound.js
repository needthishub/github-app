import React from 'react';
import {useHistory} from 'react-router-dom';
import {Container} from './styledComponents';

const NotFound = () => {
  const history = useHistory();
  return (
    <Container>
      <h1>404 Not Found</h1>
      <p className="lead">The page you are looking for doesn't exist...</p>
      <button type="button" className="btn btn-outline-success" onClick={() => history.push('/')}>
        Back to Search
      </button>
    </Container>
  );
};
export default NotFound;
