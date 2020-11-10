import React from 'react';
import {shallow} from 'enzyme';
import CardList from './CardList';

describe('<CardList/>', () => {
  it('should match to snapshot', () => {
    const wrapper = shallow(<CardList items={[{
      id: '1',
      html_url: 'testUrl',
      name: 'testName',
      owner: {avatar_url: 'testUrl'},
      description: 'testText',
    }]}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
