import React, {useState as useStateMock} from 'react';
import {shallow} from 'enzyme';
import Parallax from './Parallax';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('<Parallax />', () => {
  const setOffsetYMock = jest.fn();

  beforeEach(() => {
    useStateMock.mockImplementation((init) => [init, setOffsetYMock]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should show parallax effect', () => {
    jest.spyOn(React, 'useEffect').mockImplementation((f) => f());
    const wrapper = shallow(<Parallax />);
    expect(wrapper).toMatchSnapshot();
  });
});

/* const events = {
      preventDefault() {},
      scroll: () => setOffsetYMock(),
    }; */

/* jest.spyOn(window, 'addEventListener').mockImplementation((events, handle) => {
      event[events] = handle;
    });
    jest.spyOn(window, 'removeEventListener').mockImplementation((events, handle) => {
      event[events] = handle;
    }); */

// const events = {};

/* jest.spyOn(window, 'addEventListener').mockImplementation((event, handle) => {
      events[event] = handle;
    });
    jest.spyOn(window, 'removeEventListener').mockImplementation((event, handle) => {
      events[event] = handle;
    }); */

// events.scroll({scrollTop: 'Scroll'});
// expect(wrapper).toMatchSnapshot();

// const customEvent = new Event('scroll');
// wrapper.dispatchEvent(customEvent);

// wrapper.find(Parallax).props().onScroll();
// wrapper.simulate('scroll', events);

// wrapper.props().onScroll();
// expect(setOffsetYMock).toHaveBeenCalled();
// expect(wrapper.prop('onScroll')).toHaveBeenCalled();
// wrapper.dispatchEvent(events);
// expect(setOffsetYMock).toHaveBeenCalled();
// expect(adder).toHaveBeenCalled();
// wrapper.unmount();
// expect(remover).toHaveBeenCalled();
