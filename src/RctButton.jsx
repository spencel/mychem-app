import React from 'react';

class RctButton extends React.Component {
	constructor( props ) {
		super( props );
	}
	handleOnClick = () => {
		this.props.rctOnInput();
	}
	render() {
    return (
      <div className="RctButton" onClick={ this.handleOnClick.bind( this ) }>
      	{this.props.rctCaption}
      </div>
    );
  }
}

export default RctButton;