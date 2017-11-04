import React from 'react';
import RctButton from './RctButton.jsx';

class RctMenu extends React.Component {
	// defaultProps can be defined as a property on the component class itself, to set the default props for the class. This is used for undefined props, but not for null props.
	constructor( props ) {
		super( props );
		this.state = {
			// props can have a state mutable state counterpart, thereby props act as an initial or default values for state values
			rctCaption: props.rctCaption
		};
		//this.handleButtonInput = this.handleButtonInput.bind( this );
	}
	handleButtonInput = ( view ) => {
		console.log( "RctMenu.handleButtonInput()")
		this.props.rctOnInput( view );
	}
  render() {
    return (
      <div className="RctMenu">
      	<RctButton rctCaption="Gibbs Energy" rctOnInput={ this.handleButtonInput.bind( this, "viewRctGibbsEnergy" ) }/>
      	<RctButton rctCaption="Poisson Distribution" rctOnInput={ this.handleButtonInput.bind( this, "viewRctPoissonDistribution" ) }/>
      </div>
    );
  }

}

export default RctMenu;