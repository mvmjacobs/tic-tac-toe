import * as React from 'react';

// assets
import 'src/game/game.css';

// components
import Board from 'src/game/board/board';

export default class Game extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			history: [
				{ squares: Array(9).fill(null) }
			],
			xIsNext: true
		};
	}

	public render() {
		const history = this.state.history;
		const current = history[history.length - 1];
		const winner = this.calculateWinner(current.squares);

		let status: string;
		if (winner)
			status = `Winner: ${winner}`;
		else
			status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;

		return (
			<div className="game">
				<div className="game-board">
					<Board squares={current.squares} onClick={(i: number) => this.handleClick(i)} />
				</div>
				<div className="game-info">
					<div>{status}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}

	private handleClick(i: number) {
		const history = this.state.history;
		const current = history[history.length - 1];
		const squares = current.squares.slice();
		if (this.calculateWinner(squares) || squares[i])
			return;

		squares[i] = this.state.xIsNext ? 'X' : 'O';
		this.setState({
			history: history.concat([{
				squares
			}]),
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
