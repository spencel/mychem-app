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
		this.state = {
			level: 0,
			upOneLevelCaption: "", // takes parent category caption, root is blank
			currentLevelCaption: "", // takes category caption, root is blank
			structure: props.rctStructure,
		}
		this.path = ["RctNavMenu"];
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
		//console.log("RctNavMenu.handleInput()");
		//console.log("args:");
		//console.log(args);
		// Determine which args should be passed to parent react class
		switch( args.action ) {
			case "LOAD_CATEGORY":
				this.loadCategory( args );
			break;
			case "GO_UP_ONE_LEVEL":
				//console.log("case \"GO_UP_ONE_LEVEL\"");
				this.goUpOneLevel( args );
			break;
			case "LOAD_VIEW":
				args = {
					action: args.action,
					args: args.args
				}
				this.props.rctOnInput( args );
			break;
			default:
				this.props.rctOnInput( args );
		}
	}
	loadCategory( args ){
		console.log("RctNavMenu.loadCategory()");
		console.log("args:");
		console.log(args);
		var parentMenuName = this.path[ this.path.length - 1 ];
		console.log("parentMenuName: " + parentMenuName);
		var parentMenu = this.props.rctSubMenuList[ parentMenuName ];
		console.log("parentMenu: ");
		console.log(parentMenu);
		var nextLevel = this.state.level + 1;
		var upOneLevelCaption = parentMenu.caption;
		var nextLevelCaption = args.caption;
		var subMenuName = args.args;
		this.path.push( subMenuName );
		var structure = this.props.rctSubMenuList[ subMenuName ];
		this.setState({ 
			level: nextLevel,
			upOneLevelCaption: upOneLevelCaption,
			currentLevelCaption: nextLevelCaption,
			structure: structure
		});
	}
	goUpOneLevel( args ){
		console.log("RctNavMenu.goUpOneLevel()");
		console.log("this.path:");
		console.log(this.path);
		this.path.pop();
		console.log("this.path:");
		console.log(this.path);
		var nextMenuName = this.path[ this.path.length - 1 ];
		console.log("nextMenuName: " + nextMenuName);
		var structure = this.props.rctSubMenuList[ nextMenuName ];
		if ( nextMenuName === "RctNavMenu" ) {
			console.log("nextMenuName === \"RctNaveMenu\": true");
			this.setState({
				level: 0,
				upOneLevelCaption: "",
				currentLevelCaption: "",
				structure: structure
			});
		} else {
			console.log("nextMenuName === \"RctNaveMenu\": false");
			var nextParentMenuName = this.path[ this.path.length - 2 ];
			var nextParentMenuNameCaption = this.props.rctSubMenuList[ nextParentMenuName ].caption;
			this.setState({
				level: 0,
				upOneLevelCaption: nextParentMenuNameCaption,
				currentLevelCaption: structure.caption,
				structure: structure
			});
		}
		/*if ( this.path.length > 1 ) {
			this.path.pop();
			var nextMenuName = this.path[ this.path.length - 1 ];
			var nextParentMenu;
		}
		console.log("nextMenuName: " + nextMenuName);
		var structure = this.props.rctSubMenuList[ nextMenuName ]
		var currentLevelCaption = this.state.upOneLevelCaption;
		console.log("this.state.level: " + this.state.level);
		if ( nextMenuName === "RctNavMenu" ) { // special case if parent menu is main menu
			this.setState({
				level: 0,
				upOneLevelCaption: "",
				currentLevelCaption: "",
				structure: structure
			});
		} else if ( this.state.level === 2 ) {
			this.setState({
				level: this.state.level - 1,
				upOneLevelCaption: "Main",
				currentLevelCaption: currentLevelCaption,
				structure: structure
			});
		} else {
			this.setState({
				level: this.state.level - 1,
				upOneLevelCaption: parentMenu.caption,
				currentLevelCaption: currentLevelCaption,
				structure: structure
			});
		}*/
	}
	buildMenu() {
		//console.log( "RctNavMenu.buildMenu()" );
		//console.log("this.state.level: " + this.state.level);
		const structure = this.state.structure;
		//console.log("structure:");
		//console.log(structure);
		var menu = [];
		var metaData = structure.meta;
		var data = structure.data;
		// Build up-one-level button and current submenu caption
		if ( this.state.upOneLevelCaption === "" ) {
			
		} else {
			// Build up-one-level button
			//console.log( "this.state.upOneLevelCaption: " + this.state.upOneLevelCaption );
			menu.push( <RctButton
				key = { this.state.upOneLevelCaption }
				rctType = { type }
				rctCaption = { "< " + this.state.upOneLevelCaption }
				rctAction = { "GO_UP_ONE_LEVEL" }
				rctArgs = { "RctNavMenuRoot" }
				rctOnInput = { this.handleInput }
			/> );
			// Build current-level title
			menu.push( <div className="currentLevelCaption">{ this.state.currentLevelCaption }:</div> );
		}
		
		//console.log( metaData );
		for ( var i = 0; i < data.length; i++ ) { // meta data is element 0, method for parsing will be developed later, hard code it for now.
			var row = data[ i ];
			//console.log( "metaData.type: ");
			//console.log(metaData.type);
			//console.log("metaData.type: " + metaData[ 0 ].type);
			var type = metaData[ 0 ].type[ row[ 0 ] ];
			var caption = row[ 1 ];
			var action = metaData[ 2 ].action[ row[ 2 ] ];
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