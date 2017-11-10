import React from 'react';

class RctButton extends React.Component {
	constructor( props ) {
		super( props );
    //console.log(props);
	}
  clicked = ( rctEvent ) => {
    this.props.rctOnInput( rctEvent, {
      class: "RctButton",
      action: this.props.rctAction,
      args: this.props.rctArgs
    });
  }
	render() {
    return (
     	<li className="RctButton" onClick={ this.clicked }>
      	{ this.props.rctCaption }
      </li>
    );
  }
}

export default RctButton;