/**
 * External dependencies
 */
import React from 'react';
import { render } from 'react-dom';

/**
 * Internal dependencies
 */
import { __BROWSER__ } from '../config';

/**
 * Stylesheet
 */
if (__BROWSER__) require('./style.scss');

/**
 * Test Component
 */
const Test = () => <div>Test Component</div>;

/**
 * Hot module loading
 */
if (module.hot) {
  module.hot.accept();
}

/**
 * Render application
 */
render(<Test />, document.getElementById('root'));
