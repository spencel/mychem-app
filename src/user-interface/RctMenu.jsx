import React from 'react';
import RctButton from './RctButton.jsx';

class RctMenu extends React.Component {
	// defaultProps can be defined as a property on the component class itself, to set the default props for the class. This is used for undefined props, but not for null props.
	constructor( props ) {
		super( props );
	}
	componentWillReceiveProps( newProps ) {
		console.log( "RctMenu.componentWillReceiveProps()" );
		console.log( newProps )
		this.setState({ visible: newProps.rctVisible })
	}
	handleButtonInput = ( action ) => {
		this.props.rctOnInput( action );
	}
	generateMenu( structure ) {
		var menu = [];
		for ( var i = 0; i < structure.length; i++ ) {
			if ( structure[ i ].type === "BUTTON" ) {
				menu.push( <RctButton
					key={ i }
					rctCaption={ structure[ i ].caption }
					rctOnInput={ this.handleButtonInput.bind( this, structure[ i ].action ) }
				/> );
			}
		}
		return menu;
	}
  render() {
  	console.log( "RctMenu.render()" );
  	if ( this.props.rctVisible === true ) {
  		return (
	      <div className="RctMenu">
	      	<ul>
	      		{ this.generateMenu( this.props.rctStructure ) }
	      	</ul>
	      </div>
	    );
  	} else /*( this.state.visible === false )*/ {
  		return (
	      <div className="RctMenu">
	      </div>
	    );
  	}
  }
}

export default RctMenu;