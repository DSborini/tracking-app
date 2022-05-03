import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tracking extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { jsonData } = this.props;
    return (
      <div>
        <p>Componente da tracking</p>
        <p>{ jsonData }</p>
      </div>
    );
  }
}

Tracking.propTypes = {
  jsonData: PropTypes.string.isRequired,
};

export default Tracking;
