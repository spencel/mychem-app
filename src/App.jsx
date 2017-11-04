import React from "react";
import RctMenu from "./RctMenu.jsx";
import RctViewport from "./RctViewport.jsx";
import RctPoissonDistribution from "./RctPoissonDistribution.jsx";
import RctGibbsEnergy from "./RctGibbsEnergy.jsx"

class App extends React.Component {
	static views = {
		RctGibbsEnergy: <RctGibbsEnergy/>,
		RctPoissonDistribution: <RctPoissonDistribution/>
	}
	constructor() {
		super();
		this.state = {
			viewportContents: <RctGibbsEnergy/>
		};
		//this.handleMenuInput = this.handleMenuInput.bind( this )
	}
	handleMenuInput = ( input ) => {
		console.log( "App.handleMenuInput()" );
		/* To update RctViewport, RctViewport requires thise code inside of it:
		componentWillReceiveProps( newProps ) {
			console.log( "RctViewport.componentWillReceiveProps()" );
			this.setState({ rctContents: newProps.rctContents })
		}
		*/
		if ( input.startsWith( "view" ) ) {
			this.setState(( prevState, props ) => {
				var rctClassName = input.slice( 4 );
				return { viewportContents: App.views[ rctClassName ] };
			});
		} else {

		}
		
		console.log( this.state.viewportContents );
	}
  render() {
    return (
      <div className="App">
      	<RctMenu rctOnInput={ this.handleMenuInput }/>
      	<RctViewport rctContents={ this.state.viewportContents }/>
      </div>
    );
  }

}

export default App;