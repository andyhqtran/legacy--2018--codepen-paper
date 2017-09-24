/**
 * External dependencies
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */

/**
 * Local variables
 */
const propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.object,
  }),
};

const defaultProps = {
  location: undefined,
};

/**
 * <Application />
 */
class Application extends Component {
  componentDidMount() {
    console.info('Application mounted');
  }

  render() {
    return (
      <div>Application</div>
    );
  }
}

Application.propTypes = propTypes;
Application.defaultProps = defaultProps;

export default Application;
