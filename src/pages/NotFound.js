import React from 'react';
import {useHistory} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {Container} from './styledComponents';

const NotFound = () => {
  const history = useHistory();
  return (
    <Container>
      <h1>404 Not Found</h1>
      <p className="lead">The page you are looking for doesn&apos;t exist...</p>
      <Button type="button" variant="success" onClick={() => history.push('/')}>
        Back to Search
      </Button>
    </Container>
  );
};
export default NotFound;
