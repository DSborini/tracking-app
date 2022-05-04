import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tracking extends Component {
  constructor(props) {
    super(props);

    this.renderTracking = this.renderTracking.bind(this);

    this.state = {

    };
  }

  renderTracking() {
    const { jsonData } = this.props;

    if (jsonData === 'Invalid JSON') {
      return (
        <p className="tc__error">JSON entered is invalid</p>
      );
    }

    return jsonData.map((tracking, i) => {
      const { category, action } = tracking.parsedSettings;
      return (
        <div key={ i } className="tc__div">
          <p className="tc__title">{ category }</p>
          <p className="tc__subtitle">{ action }</p>
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
