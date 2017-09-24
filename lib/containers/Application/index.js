/**
 * External dependencies
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

/**
 * Internal dependencies
 */
import * as actions from '../../actions';
import Application from '../../components/Application';

/**
 * Local variables
 */
const mapStateToProps = state => ({
  location: state.location,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Application));
