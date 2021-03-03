import React from 'react';
import {shallow} from 'enzyme';
import Button from 'react-bootstrap/Button';
import NotFound from './NotFound';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('<NotFound/>', () => {
  it('should back to search when press button', () => {
    const wrapper = shallow(<NotFound />);
    wrapper.find(Button).simulate('click');
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });
});
