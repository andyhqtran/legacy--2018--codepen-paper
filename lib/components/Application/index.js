/**
 * External dependencies
 */
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
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
    const { location } = this.props;
    console.info('Application mounted');
  }

  render() {
    const { location } = this.props;

    return (
      <div className="application">
        <Sidebar location={location} />
        <div className="content">
          <Route exact path="/" component={() => <div>test</div>} />
        </div>
      </div>
    );
  }
}

Application.propTypes = propTypes;
Application.defaultProps = defaultProps;

export default Application;
