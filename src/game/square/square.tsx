import * as React from 'react';

// assets
import 'src/game/square/square.css';

export default class Square extends React.Component<any, any> {
	public render() {
		return (
			<button className="square" onClick={() => this.props.onClick()}>
				{this.props.value}
			</button>
		);
	}
}
