import React from 'react';

class RctButton extends React.Component {
	constructor( props ) {
		super( props );
	}
	render() {
    return (
     	<li className="RctButton" onClick={ this.props.rctOnInput.bind( this ) }>
      	{this.props.rctCaption}
      </li>
    );
  }
}

export default RctButton;