import React from 'react';
import RctButton from './RctButton.jsx';

class RctNavMenu extends React.Component {
	// defaultProps can be defined as a property on the component class itself, to set the default props for the class. This is used for undefined props, but not for null props.
	constructor( props ) {
		super( props );
		//RctNavMenu.parseMetaData( props.rctData[0] ) make this later
		console.log( props );
	}
	componentWillReceiveProps( newProps ) {
		console.log( "RctNavMenu.componentWillReceiveProps()" );
		console.log( newProps )
		this.setState({ visible: newProps.rctVisible })
	}
	handleButtonInput = ( action ) => {
		this.props.rctOnInput( action );
	}
	/*static parseMetaData( metaData ) {
		console.log( metaData );
		return metaData;
	}*/
	static generateMenu( structure ) {
		console.log( "RctNavMenu.generateMenu()" );
		var menu = [];
		for ( var i = 1; i < structure.length; i++ ) { // meta data is element 0, method for parsing will be developed later, hard code it for now.
			var row = structure[ i ];
			var type;
			if ( row[ 0 ] === 0 ) {
				type = "BUTTON";
			}
			var caption = row[ 1 ];
			var action;
			if ( row[ 2 ] === 0 ) {
				action = "LOADCATEGORY";
			} else if ( row[ 2 ] === 1 ) {
				action = "LOADVIEW";
			}
			var args = row[ 3 ];
			console.log( "type: " + type );
			console.log("caption: " + caption);
			console.log("action: " + action);
			console.log("args: " + args);
			/*if ( structure[ i ].type === "BUTTON" ) {
				menu.push( <RctButton
					key={ i }
					rctCaption={ structure[ i ].caption }
					rctOnInput={ this.handleButtonInput.bind( this, structure[ i ].action ) }
				/> );
			}*/
		}
		return menu;
	}
  render() {
  	console.log( "RctNavMenu.render()" );
  	if ( this.props.rctVisible === true ) {
  		return (
	      <div className="RctNavMenu">
	      	<ul>
	      		{ RctNavMenu.generateMenu( this.props.rctStructure ) }
	      	</ul>
	      </div>
	    );
  	} else /*( this.state.visible === false )*/ {
  		return (
	      <div className="RctNavMenu">
	      </div>
	    );
  	}
  }
}

export default RctNavMenu;