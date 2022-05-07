import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tracking extends Component {
  constructor(props) {
    super(props);

    this.renderTracking = this.renderTracking.bind(this);

    this.state = {

    };
  }

  filterExtras(extras) {
    const keys = Object.keys(extras);
    const filteredExtrasKeys = keys.filter((key) => !key.includes('#'));
    const filteredExtrasValues = filteredExtrasKeys.map((key) => extras[key]);
    const filteredExtrasObject = filteredExtrasKeys.reduce((obj, key, i) => {
      obj[key] = filteredExtrasValues[i];
      return obj;
    }, {});

    return filteredExtrasObject;
  }

  renderExtras(extras) {
    const filteredExtrasObject = this.filterExtras(extras);
    return Object.keys(filteredExtrasObject).map((key) => (
      <p key={ key } className="tc__extras">
        { key }
        :
        {' '}
        { filteredExtrasObject[key] }
      </p>
    ));
  }

  renderTracking() {
    const { jsonData } = this.props;

    if (jsonData === 'Invalid JSON') {
      return (
        <p className="tc__error">JSON entered is invalid</p>
      );
    }

    return jsonData.map((tracking, i) => {
      const { category, action, extras } = tracking.parsedSettings;

      return (
        <div key={ i } className="tc__div">
          <p className="tc__title">{ category }</p>
          <p className="tc__subtitle">{ action }</p>
          { this.renderExtras(extras) }
        </div>
      );
    });
  }

  render() {
    return (
      <>
        <p className="tc__first__title">.</p>
        { this.renderTracking() }
      </>
    );
  }
}

Tracking.propTypes = {
  jsonData: PropTypes.string.isRequired,
};

export default Tracking;
