import React from 'react';
import {shallow} from 'enzyme';
import Button from 'react-bootstrap/Button';
import About from './About';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('<About/>', () => {
  it('should back to search when press button', () => {
    const wrapper = shallow(<About />);
    wrapper.find(Button).simulate('click');
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });
});
