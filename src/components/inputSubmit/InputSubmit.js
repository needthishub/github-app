import React, {Component} from 'react';
import {Input, Button} from './styledComponents';

class InputSubmit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  changeValue(value) {
    this.setState({value});
  }

  submitValue() {
    this.setState({value: ''});
    this.props.onSubmit(this.state.value);
  }

  render() {
    return (
      <>
        <Input
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={(event) => this.changeValue(event.target.value)}
        />
        <Button className="btn btn-primary" onClick={() => this.submitValue()}>
          {this.props.buttonText}
        </Button>
      </>
    );
  }
}

export default InputSubmit;
