/**
 * External dependencies
 */
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

/**
 * Internal dependencies
 */
import { __DEVELOPMENT__, __PORT__, __PRODUCTION__ } from '../config';
import webpackConfig from '../webpack.config.babel';

/**
 * Local variables
 */

/**
 * Application
 */
const app = express();

/**
 * Webpack middleware
 */
if (__DEVELOPMENT__) {
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    serverSideRender: true,
  }));

  app.use(webpackHotMiddleware(compiler));
}

/**
 * Application routes
 */
app.get('/', (req, res) => {
  res.send('Testing');
});

/**
 * Application listener
 */
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
