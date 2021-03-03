import React from 'react';
import PropTypes from 'prop-types';
import {Alert, ExclamationMark} from './styledComponents';

const ShowAlert = ({showAlert}) => {
  if (!showAlert) {
    return null;
  }
  return (
    <Alert className="alert alert-danger" role="alert">
      <ExclamationMark className="fas fa-exclamation-circle" />
                &nbsp;Please enter the name of your repository.
    </Alert>
  );
};

ShowAlert.propTypes = {
  showAlert: PropTypes.bool.isRequired,
};

export default ShowAlert;
