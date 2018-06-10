import * as React from 'react';
import './app.css';

import logo from './logo.svg';

class App extends React.Component {
	public render() {
		return (
			<div className="app">
				<header className="app-header">
					<img src={logo} className="app-logo" alt="logo" />
					<h1 className="app-title">Welcome to React Tic-Tac-Toe</h1>
				</header>
				<p className="app-intro">
					The best game you'll ever play today!
				</p>
			</div>
		);
	}
}

export default App;
