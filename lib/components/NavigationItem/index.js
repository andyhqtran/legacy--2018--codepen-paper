/**
 * External dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { push } from 'react-router-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Local variables
 */
const propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  href: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

const defaultProps = {
  active: undefined,
  className: undefined,
  href: undefined,
  to: undefined,
  onClick: undefined,
};

/**
 * NavigationItem Component
 */
class NavigationItem extends Component {
  constructor() {
    super();

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(event) {
    const { dispatch, onClick, to } = this.props;

    if (!to) {
      return onClick;
    }

    event.preventDefault();

    return dispatch(push(to));
  }

  render() {
    const { active, children, className, href, to } = this.props;

    const classes = classNames({
      'navigation-item': true,
      'is-active': active,
    }, className);

    return (
      <a
        className={classes}
        href={href || to}
        onClick={this._handleClick}
      >
        {children}
      </a>
    );
  }
}

NavigationItem.propTypes = propTypes;
NavigationItem.defaultProps = defaultProps;

export default withRouter(connect()(NavigationItem));
