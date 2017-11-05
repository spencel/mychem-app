import React from 'react';
//import RctComponent1 from './RctComponent1' // imports component from same directory
//import RctComponent2 from './RctComponent2/RctComponent2' // imports component from a subdirectory

								//extends: has all members of extended class
class RctTemplate extends React.Component {

	constructor( props ) {
		super( props ); // required in order to mutate members from extended class
		this.state = {
			myDictionary: {}
		};
	}

	componentWillMount() {
		this.setState({
			myDictionary:
			{
				"key1": "value1",
				"key2": "value2"
			},
			myMenu: {
				"button1": "value1",
				"button2": "value2"
			}
		})
	}

	componentDidMount() { }

	onButtonClick( event ) {
			event.preventDefault();

			console.log( event );

			alert( "Button with id \"" + event.target.id + "\" was clicked! Check the log for event details!")

			
	    
	  }

		render() {

			return (
					<div className="RctTemplate">
						<div>
							<h4>My Menu</h4>
							<ul>
								{Object.keys( this.state.myMenu ).map( key =>
									<li id={key} key={key} className="button"
										onClick={( event ) => this.onButtonClick( event )} >{key}
									</li>
								)}
							</ul>
						</div>
					</div>
			);

		}

	}



export default RctTemplate;