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
import PageHeader from '../PageHeader';
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

  _getPageTitle() {
    const { location } = this.props;

    const isPens = location.pathname.substr(0, 5) === '/pens';

    const isPosts = location.pathname.substr(0, 6) === '/posts';

    const isCollections = location.pathname.substr(0, 12) === '/collections';

    if (isPens) {
      return 'Pens';
    } else if (isPosts) {
      return 'Posts';
    } else if (isCollections) {
      return 'Collections';
    }

    return 'Home';
  }

  render() {
    const { location } = this.props;

    return (
      <div className="application">
        <Sidebar location={location} />
        <div className="content">
          <PageHeader title={this._getPageTitle()} />
          <Route exact path="/" component={() => <div>test</div>} />
        </div>
      </div>
    );
  }
}

Application.propTypes = propTypes;
Application.defaultProps = defaultProps;

export default Application;
