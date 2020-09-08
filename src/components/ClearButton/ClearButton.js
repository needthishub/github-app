import React from 'react';
import PropTypes from 'prop-types';
import {Button} from './styledComponents';

function ClearButton(props) {
  const {items, clear} = props;
  return (
    (items.length > 0)
      ? (
        <Button
          type="button"
          className="btn btn-danger"
          onClick={clear}
        >
          Clear All
        </Button>
      ) : null
  );
}

ClearButton.propTypes = {
  items: PropTypes.array.isRequired,
  clear: PropTypes.func.isRequired,
};

export default ClearButton;
