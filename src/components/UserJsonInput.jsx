import React, { Component } from 'react'

export class UserJsonInput extends Component {
  render() {
    return (
      <div>
          <h3>Enter the process JSON:</h3>
          <textarea></textarea>
          <button type='button'>Validate</button>
      </div>
    )
  }
}

export default UserJsonInput;