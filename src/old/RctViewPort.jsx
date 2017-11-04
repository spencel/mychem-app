import React, { Component } from 'react';

class RctViewPort extends Component {

	constructor( props ) {
		super( props );
		this.state = {
		};
	}

	onButtonClick( event ) {

		console.log( event.target );
    
  }

	render() {

		return (
				<div className="RctViewPort">
				</div>
		);

	}

}

export default RctViewPort;