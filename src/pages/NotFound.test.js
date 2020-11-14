import React from 'react';
import {shallow} from 'enzyme';
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
    wrapper.find('button').simulate('click');
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });
});
