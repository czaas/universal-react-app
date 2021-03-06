import React from 'react';
import { Link } from 'react-router';

export class AppComponent extends React.Component {
	render() {
		return (
			<div>
				<h2>Welcome to my App</h2>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
				{this.props.children}
			</div>
		);
	}
}
