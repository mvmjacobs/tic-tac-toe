import * as React from 'react';

// assets
import 'src/components/game/game.css';

// components
import Board from 'src/components/board/board';

export default class Game extends React.Component {
	public render() {
		return (
			<div className="game">
				<div className="game-board">
					<Board />
				</div>
				<div className="game-info">
					<div>{/* status */}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}
}
