import React from 'react';
import PropTypes from 'prop-types';
import {Container} from './styledComponents';
import Card from '../Card/Card';

const CardList = ({items}) => (
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

CardList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default CardList;
