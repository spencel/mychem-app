import React from 'react';
import RctButton from './RctButton.jsx';

class RctNavMenu extends React.Component {
	// defaultProps can be defined as a property on the component class itself, to set the default props for the class. This is used for undefined props, but not for null props.
	constructor( props ) {
		super( props );
		/*
		props = {
				rctVisible
				rctStructure
				rctOnInput
		}
		*/
		//RctNavMenu.parseMetaData( props.rctData[0] ) make this later
		//console.log( props );
	}
	componentWillReceiveProps( newProps ) {
		//console.log( "RctNavMenu.componentWillReceiveProps()" );
		//console.log( newProps )
		this.setState({ visible: newProps.rctVisible })
	}
	/*static parseMetaData( metaData ) {
		//console.log( metaData );
		return metaData;
	}*/
	handleInput = ( rctEvent, args ) => {
		//console.log(args);
		this.props.rctOnInput( rctEvent, args );
	}
	buildMenu() {
		//console.log( "RctNavMenu.buildMenu()" );
		const structure = this.props.rctStructure;
		//console.log("structure:");
		//console.log(structure);
		var menu = [];
		var metaData = {
			type: structure[ 0 ][ 0 ]["TYPE"],
			caption: structure[ 0 ][ 1 ],
			action: structure[ 0 ][ 2 ]["ACTION"],
			args: structure[ 0 ][ 3 ]
		};
		//console.log( metaData );
		for ( var i = 1; i < structure.length; i++ ) { // meta data is element 0, method for parsing will be developed later, hard code it for now.
			var row = structure[ i ];
			//console.log( "metaData.type: ");
			//console.log(metaData.type);
			var type = metaData.type[ row[ 0 ] ];
			var caption = row[ 1 ];
			var action = metaData.action[ row[ 2 ] ];
			var args = row[ 3 ];
			//console.log( "type: " + type );
			//console.log("caption: " + caption);
			//console.log("action: " + action);
			//console.log("args: " + args);
			if ( type === "RCT_BUTTON" ) {
				menu.push( <RctButton
					key = { i }
					rctType = { type }
					rctCaption = { caption }
					rctAction = { action }
					rctArgs = { args }
					rctOnInput = { this.handleInput }
				/> );
			}
		}
		//console.log( menu );
		return menu;
	}
  render() {
  	//console.log( "RctNavMenu.render()" );
  	//console.log( "this.props.rctVisible: " + this.props.rctVisible );
  	if ( this.props.rctVisible === true ) {
  		return (
	      <div className="RctNavMenu">
	      	<ul>
	      		{ this.buildMenu() }
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