/**
 * External dependencies
 */
import express from 'express';

/**
 * Internal dependencies
 */
import { __PORT__, __PRODUCTION__ } from '../config';

/**
 * Local variables
 */

/**
 * Application
 */
const app = express();

app.get('/', (req, res) => {
  res.send('Testing');
});

app.listen(__PORT__, (err) => {
  if (err) {
    console.error(err);
  }
  if (__PRODUCTION__) {
    console.info('Listening on port %s. Open up https://localhost:%s/ in your browser.', __PORT__, __PORT__);
  } else {
    console.info('Listening on port %s. Open up http://localhost:%s/ in your browser.', __PORT__, __PORT__);
  }
});
