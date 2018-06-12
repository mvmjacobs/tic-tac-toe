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
			squares: Array(9).fill(null),
			xIsNext: true
		};
	}

	public render() {
		const winner = this.calculateWinner(this.state.squares);
		let status: string;
		if (winner)
			status = `Winner: ${winner}`;
		else
			status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;

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
		if (this.calculateWinner(squares) || squares[i])
			return;

		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
			squares,
			xIsNext: !this.state.xIsNext
		});
	}

	private calculateWinner(squares: any[]) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (const line of lines) {
			const [a, b, c] = line;
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a];
			}
		}
		return null;
	}
}
