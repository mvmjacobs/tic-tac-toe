import * as React from 'react';

// assets
import 'src/components/square/square.css';

// model
import IProps from 'src/components/square/props.interface';

export default class Square extends React.Component<IProps> {
	public render() {
		return (
			<button className="square">
				{this.props.value}
			</button>
		);
	}
}
