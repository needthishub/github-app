import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Input, Button} from './styledComponents';

const InputSubmit = ({onSubmit, placeholder, buttonText}) => {
  const [value, setValue] = useState('');

  const submitValue = () => {
    setValue('');
    onSubmit(value);
  };

  return (
    <>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button className="btn btn-primary" onClick={submitValue}>
        {buttonText}
      </Button>
    </>
  );
};

InputSubmit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default InputSubmit;
