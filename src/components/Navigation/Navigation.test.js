import React from 'react';
import {shallow} from 'enzyme';
import Navigation from './Navigation';

describe('<Navigation/>', () => {
  it('should match to snapshot', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper).toMatchSnapshot();
  });
});
