import React, {useState} from 'react';
import {Input, Button} from './styledComponents';

function InputSubmit({onSubmit, placeholder, buttonText}) {
  const [value, setValue] = useState('');

  function submitValue() {
    setValue('');
    onSubmit(value);
  }

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
}

export default InputSubmit;
