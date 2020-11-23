import React, {useState as useStateMock} from 'react';
import {shallow} from 'enzyme';
import mockAxios from 'axios';
import Search from './Search';
import InputSubmit from '../components/InputSubmit/InputSubmit';
import ClearButton from '../components/ClearButton/ClearButton';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

jest.mock('axios');

describe('<Search/>', () => {
  const setReposMock = jest.fn();
  const setLoadingMock = jest.fn();
  const setShowAlert = jest.fn();
  beforeEach(() => {
    useStateMock.mockImplementationOnce((init) => [init, setReposMock]);
    useStateMock.mockImplementationOnce((init) => [init, setLoadingMock]);
    useStateMock.mockImplementationOnce((init) => [init, setShowAlert]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should search repos when press submit button', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({data: {items: ['testUser']}}));
    const wrapper = shallow(<Search />);
    await wrapper.find(InputSubmit).props().onSubmit('testUser');
    expect(setReposMock).toHaveBeenCalledWith(['testUser']);
  });

  it('should show alert if not found', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.reject(new Error('Network Error')));
    const wrapper = shallow(<Search />);
    await wrapper.find(InputSubmit).props().onSubmit();
    expect(setShowAlert).toHaveBeenCalledWith(true);
  });

  it('should clear repos when pressing clear button', () => {
    const wrapper = shallow(<Search />);
    wrapper.find(ClearButton).props().clear();
    expect(setReposMock).toHaveBeenCalledWith([]);
  });
});
