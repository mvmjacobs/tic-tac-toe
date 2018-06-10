import * as React from 'react';

// assets
import 'src/components/square/square.css';

export default class Square extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			value: null,
		}
	}

	public render() {
		return (
			<button className="square" onClick={() => this.setState({ value: 'X' })}>
				{this.state.value}
			</button>
		);
	}
}
