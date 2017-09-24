/**
 * External dependencies
 */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import { __BROWSER__ } from '../../../config';
import Logo from '../Logo';

/**
 * Stylesheet
 */
if (__BROWSER__) require('./style.scss');

/**
 * Local variables
 */
const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: undefined,
};

/**
 * Sidebar Component
 *
 * @since 0.0.1
 */
const Sidebar = ({ className }) => {
  const classes = classNames('sidebar', className);

  return (
    <aside className={classes}>
      <Logo />
      Sidebar
    </aside>
  )
};

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

export default Sidebar;
