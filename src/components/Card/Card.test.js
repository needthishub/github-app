import React from 'react';
import {shallow} from 'enzyme';
import Card from './Card';

describe('<Card/>', () => {
  it('should match to snapshot', () => {
    const wrapper = shallow(<Card image="test img" title="testTitle" link="testLink" description="test Text" />);
    expect(wrapper).toMatchSnapshot();
  });
});
