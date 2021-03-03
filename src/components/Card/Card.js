import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import {
  Container, ImageContainer, Image, CardBody, Title, Description,
} from './styledComponents';

const Card = ({
  link, image, title, description,
}) => (
  <Container>
    <ImageContainer>
      <Image src={image} />
    </ImageContainer>
    <CardBody>
      <Title>{title}</Title>
      { description
        ? (
          <Description>
        &nbsp;&nbsp;&nbsp;&nbsp;
            <strong>Description:</strong>
&nbsp;
            {description}
          </Description>
        ) : <></>}
      <Button href={link} role="button" rel="noreferrer" target="_blank" varian="info">
        <strong>View the Repo</strong>
      </Button>
    </CardBody>
  </Container>
);

Card.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.any.isRequired,
};

export default Card;
