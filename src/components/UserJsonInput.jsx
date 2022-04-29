import React, { Component } from 'react';

class UserJsonInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      // json: '',
      // error: false,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h3>Enter the process JSON:</h3>
        <textarea name="json" onChange={ this.handleChange } />
        <button type="button">Validate</button>
      </div>
    );
  }
}

export default UserJsonInput;
