/**
 * External dependencies
 */
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import { __BROWSER__ } from '../../../config';
import Logo from '../Logo';
import Navigation, { NavigationItem } from '../Navigation';

/**
 * Stylesheet
 */
if (__BROWSER__) require('./style.scss');

/**
 * Local variables
 */
const propTypes = {
  className: PropTypes.string,
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.object,
  }),
};

const defaultProps = {
  className: undefined,
  location: undefined,
};

/**
 * Sidebar Component
 *
 * @since 0.0.1
 */
class Sidebar extends Component {
  _renderTitle() {
    const { location } = this.props;

    const isPens = location.pathname.substr(0, 5) === '/pens';

    const isPosts = location.pathname.substr(0, 6) === '/posts';

    const isCollections = location.pathname.substr(0, 12) === '/collections';

    let titleText;

    if (isPens) {
      titleText = 'Pens';
    } else if (isPosts) {
      titleText = 'Posts';
    } else if (isCollections) {
      titleText = 'Collections';
    }

    if (titleText) {
      return <h2 className="sidebar__title">{titleText}</h2>;
    }

    return false;
  }

  _renderNavigation() {
    const { location } = this.props;

    const isPens = location.pathname.substr(0, 5) === '/pens';

    const isPosts = location.pathname.substr(0, 6) === '/posts';

    const isCollections = location.pathname.substr(0, 12) === '/collections';

    if (isPens) {
      return (
        <Navigation direction="vertical">
          <NavigationItem active={location.pathname === '/pens'} to="/pens">
            Popular
          </NavigationItem>
          <NavigationItem active={location.pathname === '/pens/public'} to="/pens/public">
            Public
          </NavigationItem>
        </Navigation>
      );
    }

    if (isPosts) {
      return (
        <Navigation direction="vertical">
          <NavigationItem active={location.pathname === '/posts'} to="/posts">
            Popular
          </NavigationItem>
          <NavigationItem active={location.pathname === '/posts/public'} to="/posts/public">
            Public
          </NavigationItem>
        </Navigation>
      );
    }

    if (isPosts) {
      return (
        <Navigation direction="vertical">
          <NavigationItem active={location.pathname === '/collections'} to="/collections">
            Popular
          </NavigationItem>
          <NavigationItem active={location.pathname === '/collections/public'} to="/collections/public">
            Public
          </NavigationItem>
        </Navigation>
      );
    }

    return (
      <Navigation direction="vertical" large>
        <NavigationItem active to="/pens">Home</NavigationItem>
        <NavigationItem to="/pens">Pens</NavigationItem>
        <NavigationItem to="/posts">Posts</NavigationItem>
        <NavigationItem to="/collections">Collections</NavigationItem>
      </Navigation>
    );
  }

  render() {
    const { className, location } = this.props;

    const classes = classNames('sidebar', className);

    return (
      <aside className={classes}>
        <Logo />
        {this._renderTitle()}
        {this._renderNavigation()}
      </aside>
    )
  }
}

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default Sidebar;
