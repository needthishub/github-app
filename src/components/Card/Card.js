import React, {Component} from 'react';
import {
  Container, Image, CardBody, Title, Description,
} from './styledComponents';

class Card extends Component {
  render() {
    return (
      <Container>
        <a href={this.props.link}>
          <Image src={this.props.image} />
        </a>
        <CardBody>
          <Title>{this.props.title}</Title>
          <Description>{this.props.description}</Description>
        </CardBody>
      </Container>
    );
  }
}

export default Card;
