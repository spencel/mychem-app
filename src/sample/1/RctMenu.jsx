import React from 'react';
import RctButton from './RctButton.jsx';

class RctMenu extends React.Component {
	// defaultProps can be defined as a property on the component class itself, to set the default props for the class. This is used for undefined props, but not for null props.
	static defaultProps = {
		id: undefined
	}
	constructor( props ) {
		super( props );
		this.state = {
			// props can have a state mutable state counterpart, thereby props act as an initial or default values for state values
			rctCaption: props.rctCaption
		};
		//this.handleButtonInput = this.handleButtonInput.bind( this );
	}
	handleButtonInput = () => {
		console.log( "RctMenu.handleButtonInput()")
		this.props.rctOnInput();
	}
  render() {
    return (
      <div id={ this.props.id } className="RctMenu">
      	<RctButton id="0" rctCaption="Button A" rctOnInput={ this.handleButtonInput }/>
      	<RctButton id="1" rctCaption="Button B"/>
      	<RctButton/>
      </div>
    );
  }

}

export default RctMenu;