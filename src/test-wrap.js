import React from 'react';

const wrap = (Component) => class HoC extends React.Component {
	render() {
		return (
			<Component {...this.props} />
		)
	}
}

export default wrap;
