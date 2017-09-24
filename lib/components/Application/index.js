/**
 * External dependencies
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import { __BROWSER__ } from '../../../config';
import Sidebar from '../Sidebar';

/**
 * Stylesheet
 */
if (__BROWSER__) require('./style.scss');

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
 * Application Component
 *
 * @since 0.0.1
 */
class Application extends Component {
  componentDidMount() {
    console.info('Application mounted');
  }

  render() {
    return (
      <div className="application">
        <Sidebar />
        <div className="content">
          Content
        </div>
      </div>
    );
  }
}

Application.propTypes = propTypes;
Application.defaultProps = defaultProps;

export default Application;
