import React, { Component } from 'react';

class RctSdsu extends Component {

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
				<div className="RctSdsu">
					test
				</div>
		);

	}

}

export default RctSdsu;