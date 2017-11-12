import React from 'react';
import toggleMenuIcon from './toggleMenuIcon.svg';

class RctHeader extends React.Component {
	constructor( props ) {
		super( props );
	}
  toggleMenuVisibility = ( rctEvent ) => {
    //console.log( rctEvent )
    var args = {
      action: "TOGGLE_MENU_VISIBILITY"
    }
    this.props.rctOnInput( args );
  }
  render() {
		return (
      <div className="RctHeader">
        <div className="demo">demo</div>
      	<div 
      		id="toggleMenuButton"
      		className="button"
      		onClick={ this.toggleMenuVisibility }>
      		<img src={ toggleMenuIcon } width="20" height="20"/>
      	</div>
      </div>
    );
  }
}

export default RctHeader;