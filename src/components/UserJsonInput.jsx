import React, { Component } from 'react';
import Tracking from './Tracking';

class UserJsonInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.renderTrackings = this.renderTrackings.bind(this);
    this.updateRender = this.updateRender.bind(this);

    this.state = {
      render: false,
      json: '',
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

  updateRender(status) {
    this.setState({
      render: status,
    });
  }

  validateIsJson(json) {
    try {
      JSON.parse(json);
      return JSON.parse(json);
    } catch (e) {
      return false;
    }
  }

  filterTrackEvent(json) {
    const errorTxt = 'Invalid JSON';
    const jsonObj = this.validateIsJson(json);

    if (json === '' && json === undefined) return errorTxt;
    if (jsonObj === false) return errorTxt;
    if (jsonObj.states === undefined) return errorTxt;

    const data = jsonObj.states;

    const onlyActions = data.map((statesArray) => {
      const { inputActions } = statesArray;
      const { outputActions } = statesArray;
      const actions = [...inputActions, ...outputActions];

      return actions;
    });

    const flatActions = onlyActions.flat(Infinity);

    const onlyTrackEvents = flatActions.filter((action) => action.type === 'TrackEvent');

    return onlyTrackEvents;
  }

  renderTrackings() {
    const { json } = this.state;
    const { render } = this.state;

    const data = this.filterTrackEvent(json);
    console.log(data);

    if (render) {
      return <Tracking jsonData={ data } />;
    }
  }

  render() {
    return (
      <div>
        <h3>Enter the process JSON:</h3>
        <textarea name="json" onChange={ this.handleChange } />
        <button type="button" onClick={ () => this.updateRender(true) }>Validate</button>
        { this.renderTrackings() }
      </div>
    );
  }
}

export default UserJsonInput;
