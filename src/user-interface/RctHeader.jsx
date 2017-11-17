import React from 'react';
import toggleMenuIcon from './toggleMenuIcon.svg';
import closeIcon from './closeIcon.svg';

class RctHeader extends React.Component {
	constructor( props ) {
		super( props );
		/*
		props = {
			rctVisible
			rctStructure
			rctOnInput
			rctSubMenuList
		}
		*/
		this.state ={
			visible: props.rctVisible
		}
	}
  toggleMenuVisibility = ( rctEvent ) => {
    //console.log( rctEvent )
    var args = {
      action: "TOGGLE_MENU_VISIBILITY"
    }
    this.props.rctOnInput( args );
    this.setState( ( prevState/*, props*/ ) => {
    	if ( prevState.visible === true ) {
    		return { visible: false };
    	} else {
    		return { visible: true };
    	}
    });
  }
  render() {
  	var imgMenuIcon;
  	if ( this.state.visible === true ) {
  		imgMenuIcon = <img src={ closeIcon } width="30" height="30"/>
  	} else {
  		imgMenuIcon = <img src={ toggleMenuIcon } width="30" height="30"/>
  	}
		return (
			<div className="RctHeader">
			<div className="demo">demo</div>
				<div 
					id="toggleMenuButton"
					className="button"
					onClick={ this.toggleMenuVisibility }>
					{imgMenuIcon}
				</div>
			</div>
		);
  }
}

export default RctHeader;