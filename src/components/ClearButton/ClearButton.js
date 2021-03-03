import React from 'react';
import PropTypes from 'prop-types';
import {Button} from './styledComponents';

const ClearButton = ({items, clear, buttonText}) => {
  if (!items.length) {
    return null;
  }
  return (
    <Button
      type="button"
      className="btn btn-danger"
      onClick={clear}
    >
      {buttonText}
    </Button>
  );
};

ClearButton.propTypes = {
  items: PropTypes.array.isRequired,
  clear: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default ClearButton;
