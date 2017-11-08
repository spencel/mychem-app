import React from 'react';
import toggleMenuIcon from './toggleMenuIcon.svg';

class RctHeader extends React.Component {
	constructor( props ) {
		super( props );
	}
  render() {
		return (
      <div className="RctHeader">
        <div className="demo">demo</div>
      	<div 
      		id="toggleMenuButton"
      		className="button"
      		onClick={ this.props.rctOnInput.bind( this, "toggleMenuButton" ) }>
      		<img src={ toggleMenuIcon } width="20" height="20"/>
      	</div>
      </div>
    );
  }
}

export default RctHeader;