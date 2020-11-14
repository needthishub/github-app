import React from 'react';
import {shallow} from 'enzyme';
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
    wrapper.find('button').simulate('click');
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });
});
