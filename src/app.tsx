import * as React from 'react';

// assets
import 'src/app.css';
import logo from 'src/shared/logo.svg';

// components
import Game from 'src/game/game';

export default class App extends React.Component {
	public render() {
		return (
			<div className="app">
				<header className="header">
					<img src={logo} className="logo" alt="logo" />
					<h1 className="title">Welcome to React Tic-Tac-Toe Game</h1>
				</header>
				<p className="intro">
					The best game you'll ever play today!
				</p>
				<Game />
			</div>
		);
	}
}
