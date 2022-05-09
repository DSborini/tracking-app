import React, { Component } from 'react';
import Tracking from './Tracking';

class UserJsonInput extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.renderTrackings = this.renderTrackings.bind(this);
    this.updateRender = this.updateRender.bind(this);
    this.clearJson = this.clearJson.bind(this);

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

  clearJson() {
    this.setState({
      json: '',
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
    let data = jsonObj.states;

    if (json === '' && json === undefined) return errorTxt;
    if (jsonObj === false) return errorTxt;

    if (jsonObj.states === undefined) {
      const array = [];
      array.push(jsonObj);
      data = array;
    }

    const onlyActions = data.map((statesArray) => {
      const { inputActions } = statesArray;
      const { outputActions } = statesArray;

      if (inputActions === undefined || outputActions === undefined) return false;
      const actions = [...inputActions, ...outputActions];

      return actions;
    });

    if (onlyActions === false) return errorTxt;

    const flatActions = onlyActions.flat(Infinity);

    const onlyTrackEvents = flatActions.filter((action) => action.type === 'TrackEvent');

    return onlyTrackEvents;
  }

  renderTrackings() {
    const { json, render } = this.state;
    const data = this.filterTrackEvent(json);
    console.log(data);

    if (render) {
      return <Tracking jsonData={ data } />;
    }
  }

  render() {
    const { json } = this.state;
    return (
      <div className="main__div">
        <div className="first__div">
          <div className="second__div">
            <p className="title__primary">Enter the process JSON:</p>
            <div className="button__div">
              <button
                type="button"
                className="button__primary button__primary_red"
                onClick={ this.clearJson }
              >
                Clear

              </button>
              <button
                className="button__primary"
                type="button"
                onClick={ () => this.updateRender(true) }
              >
                Validate

              </button>
            </div>
          </div>
          <textarea
            className="textarea__primary"
            name="json"
            onChange={ this.handleChange }
            value={ json }
          />
        </div>
        <div className="third__div">
          { this.renderTrackings() }
        </div>
      </div>
    );
  }
}

export default UserJsonInput;
