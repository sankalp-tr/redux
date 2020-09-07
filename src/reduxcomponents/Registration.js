import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import * as userActions from '../redux/actions/userActions';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';

class User extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				title: ""
			}
		}
	}

	handleChange = (e) => {
		const userTitle = { ...this.state.user, title : e.target.value };
		this.setState({ user: userTitle });
	}

	handleSubmit = (e) => {
		e.preventDefault();
		// this.props.dispatch(userActions.createUser(this.state.user));		// old method for dispatching a new action; does not require mapDispatchToProps as second parameter in the connect() function below (if used will throw error)
		this.props.actions.createUser(this.state.user);
	}

	render() {
		return (
		<form onSubmit={this.handleSubmit}>
			<h2>Users</h2>
			<h2>Add user</h2>
			<input type="text" value={this.state.user.title} onChange={this.handleChange} />
			<input type="submit"/>
			{this.props.users.map(user => (
					<div key={user.title}>{user.title}</div>
				))}
		</form>
		)
	}
}

User.propTypes = {
	users: PropTypes.array.isRequired,
//	dispatch: PropTypes.func.isRequired,
//	createUser: PropTypes.func.isRequired,
	actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
	return {
		users: state.users
	}
}

function mapDispatchToProps(dispatch) {
	return {
		// createUser: user => dispatch(userActions.createUser(user))
			actions: bindActionCreators(userActions, dispatch)	// new and better way
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
