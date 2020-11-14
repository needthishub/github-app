import React from 'react';
import {shallow} from 'enzyme';
import ShowAlert from './ShowAlert';
import {Alert} from './styledComponents';

describe('<ShowAlert/>', () => {
  it('should not show alert', () => {
    const wrapper = shallow(<ShowAlert showAlert={false} />);
    expect(wrapper.find(Alert).exists()).toBeFalsy();
  });

  it('should show alert', () => {
    const wrapper = shallow(<ShowAlert showAlert />);
    expect(wrapper.find(Alert).exists()).toBeTruthy();
  });
});
