import React from 'react';
import toggleMenuIcon from './toggleMenuIcon.svg';

class RctHeader extends React.Component {
	constructor( props ) {
		super( props );
	}
  render() {
		return (
      <div className="RctHeader">
      	<div 
      		id="toggleMenuButton"
      		className="button"
      		onClick={ this.props.rctOnInput.bind( this, "toggleMenuButton" ) }>
      		<img src={ toggleMenuIcon } width="18" height="18"/>
      	</div>
      </div>
    );
  }
}

export default RctHeader;