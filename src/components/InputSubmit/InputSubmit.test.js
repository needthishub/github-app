import React, {useState as useStateMock} from 'react';
import {shallow} from 'enzyme';
import InputSubmit from './InputSubmit';
import {Input, Button} from './styledComponents';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('<InputSubmit/>', () => {
  const setValueMock = jest.fn();
  beforeEach(() => {
    useStateMock.mockImplementation((init) => [init, setValueMock]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should clear input text when press button', () => {
    const wrapper = shallow(<InputSubmit
      onSubmit={jest.fn()}
      placeholder="Enter Repository Name"
      buttonText="Search!"
    />);
    wrapper.find(Button).props().onClick();
    expect(setValueMock).toHaveBeenCalled();
  });

  it('should change value of input onChange', () => {
    const event = {
      preventDefault() {},
      target: {value: 'the-value'},
    };
    const wrapper = shallow(<InputSubmit
      onSubmit={jest.fn()}
      placeholder="Enter Repository Name"
      buttonText="Search!"
    />);
    wrapper.find(Input).simulate('change', event);
    expect(setValueMock).toHaveBeenCalledWith('the-value');
  });
});
