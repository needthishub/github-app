import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from './styledComponents';

function ShowAlert(props) {
  const {showAlert} = props;
  return (
    (showAlert)
      ? (
        <Alert className="alert alert-danger" role="alert">
          <i className="fas fa-exclamation-circle" />
                &nbsp;Please enter the name of your repository.
        </Alert>
      ) : null
  );
}

ShowAlert.propTypes = {
  showAlert: PropTypes.bool.isRequired,
};

export default ShowAlert;
