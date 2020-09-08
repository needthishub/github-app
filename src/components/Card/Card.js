import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Image, CardBody, Title, Description,
} from './styledComponents';

const Card = ({
  link, image, title, description,
}) => (
  <Container>
    <a href={link}>
      <Image src={image} />
    </a>
    <CardBody>
      <Title>{title}</Title>
      <Description>{description}</Description>
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
