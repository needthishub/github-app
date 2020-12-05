import React from 'react';
import {useHistory} from 'react-router-dom';
import {Container} from './styledComponents';

const About = () => {
  const history = useHistory();
  return (
    <Container>
      <h1>About This App</h1>
      <p>App to Search Github Repos</p>
      <p>Version: 1.0.0</p>
      <button type="button" className="btn btn-outline-success" onClick={() => history.push('/')}>
        Back to Search
      </button>
    </Container>
  );
};

export default About;
