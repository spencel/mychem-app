import React from 'react';
import RctMenu from './RctMenu.jsx';
import RctViewport from './RctViewport.jsx';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			viewportContents: "Empty viewport"
		};
		//this.handleMenuInput = this.handleMenuInput.bind( this )
	}
	handleMenuInput = () => {
		console.log( "App.handleMenuInput()" );
		/* To update RctViewport, RctViewport requires thise code inside of it:
		componentWillReceiveProps( newProps ) {
			console.log( "RctViewport.componentWillReceiveProps()" );
			this.setState({ rctContents: newProps.rctContents })
		}
		*/
		this.setState(( prevState, props ) => {
			return { viewportContents: "Content!" }
		});
		console.log( this.state.viewportContents );
	}
  render() {
    return (
      <div className="App">
      	<RctMenu id={ 0 } rctOnInput={ this.handleMenuInput }/>
      	<RctViewport id={ 0 } rctContents={ this.state.viewportContents }/>
      </div>
    );
  }

}

export default App;