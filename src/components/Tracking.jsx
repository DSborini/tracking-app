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

    if (jsonData === 'Invalid JSON') return <p>Invalid JSON</p>;

    return jsonData.map((tracking, i) => {
      const { category, action } = tracking.parsedSettings;
      return (
        <div key={ i }>
          <p>{ category }</p>
          <p>{ action }</p>
        </div>
      );
    });
  }

  render() {
    return (
      <>
        { this.renderTracking() }
      </>
    );
  }
}

Tracking.propTypes = {
  jsonData: PropTypes.string.isRequired,
};

export default Tracking;
