import React from 'react';
import ReactDOM from 'react-dom';
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<NavLink exact to="/">Home</NavLink>
			<span> | </span>
			<NavLink exact to="/about">About</NavLink>
			<span> | </span>
			<NavLink exact to="/user">Users</NavLink>
		</div>
		);
}

export default Header;
