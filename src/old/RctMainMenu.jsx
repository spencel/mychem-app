import React from 'react';
import App from './App';
import RctSdsu from './RctSdsu';

class RctMainMenu extends React.Component {

	constructor( props ) {
		super( props );
		this.state = {
			buttons: {}
		};
	}

	componentWillMount() {
		this.setState({
			buttons: {
				"SDSU":"RctSdsu",
				"UCSD":"RctUcsd"
			}
		})
	}

	onButtonClick( event ) {
		event.preventDefault();

		console.log( event.target.id );

		App.handleEvents();
    
  }

	render() {

		return (
			<div className="RctMainMenu">
				<ul>
					{Object.keys( this.state.buttons ).map( caption =>
						<li id={caption} key={caption} className="button"
							onClick={( event ) => this.onButtonClick( event )} >{caption}
						</li>
					)}
				</ul>
			</div>
		);

	}

}

export default RctMainMenu;