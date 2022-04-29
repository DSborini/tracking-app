import React, { Component } from 'react';

class UserJsonInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: '',
      error: false,
    };
  }

  render() {
    return (
      <div>
        <h3>Enter the process JSON:</h3>
        <textarea />
        <button type="button">Validate</button>
      </div>
    );
  }
}

export default UserJsonInput;
