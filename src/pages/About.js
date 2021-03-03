import React from 'react';
import {useHistory} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {Container} from './styledComponents';

const About = () => {
  const history = useHistory();
  return (
    <Container>
      <h1>About This App</h1>
      <p>App to Search Github Repositories</p>
      <p>Version: 1.0.0</p>
      <Button type="button" variant="success" onClick={() => history.push('/')}>
        Back to Search
      </Button>
    </Container>
  );
};

export default About;
