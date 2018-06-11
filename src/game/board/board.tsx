import * as React from 'react';

// assets
import 'src/game/board/board.css';
import 'src/game/square/square.css';

// components
import Square from 'src/game/square/square';

export default class Board extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			squares: Array(9).fill(null)
		};
	}

	public render() {
		const status = 'Next player: X';

		return (
			<div>
				<div className="status">{status}</div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}

	private renderSquare(i: number) {
		return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
	}

	private handleClick(i: number) {
		const squares = this.state.squares.slice();
		squares[i] = 'X';
		this.setState({ squares });
	}
}
