import React from 'react';
import toggleMenuIcon from './toggleMenuIcon.svg';

class RctHeader extends React.Component {
	constructor( props ) {
		super( props );
	}
  toggleMenuVisibility = ( rctEvent ) => {
    //console.log( rctEvent )
    this.props.rctOnInput( rctEvent, "TOGGLE_MENU_VISIBILITY" );
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