import React from 'react';
import {shallow} from 'enzyme';
import ClearButton from './ClearButton';
import {Button} from './styledComponents';

describe('<ClearButton/>', () => {
  it('should hide button when no users', () => {
    const wrapper = shallow(<ClearButton items={[]} clear={jest.fn()} buttonText="Clear" />);
    expect(wrapper.find('items').exists()).toBe(false);
  });

  it('should show Clear All button when successfully find users', () => {
    const wrapper = shallow(<ClearButton
      items={[{
        id: '1',
        html_url: 'testUrl',
        name: 'testName',
        owner: {avatar_url: 'testUrl'},
        description: 'testText',
      }]}
      clear={jest.fn()}
      buttonText="Clear"
    />);
    expect(wrapper.find(Button).exists()).toBe(true);
  });
});
