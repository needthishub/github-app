import React from 'react';
import PropTypes from 'prop-types';
import {Button} from './styledComponents';

const ClearButton = ({items, clear}) => {
  if (!items.length) {
    return null;
  }
  return (
    <Button
      type="button"
      className="btn btn-danger"
      onClick={clear}
    >
      Clear All
    </Button>
  );
};

ClearButton.propTypes = {
  items: PropTypes.array.isRequired,
  clear: PropTypes.func.isRequired,
};

export default ClearButton;
