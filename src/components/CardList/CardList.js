import React, {Component} from 'react';
import {Container} from './styledComponents';
import Card from '../Card/Card';

class CardList extends Component {
  render() {
    const {items} = this.props;
    return (
      <Container>
        {items.map((item) => (
          <Card
            key={item.id}
            link={item.html_url}
            title={item.name}
            description={item.description}
            image={item.owner.avatar_url}
          />
        ))}
      </Container>
    );
  }
}

export default CardList;
