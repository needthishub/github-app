import React, {Component} from 'react';
import {Loading} from './styledComponents';

class Loader extends Component {
  render() {
    return (
      <Loading>
        <div className="lds-hourglass" />
      </Loading>
    );
  }
}

export default Loader;
