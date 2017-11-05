import React from "react";
import RctHeader from "./RctHeader.jsx";
import RctMenu from "./RctMenu.jsx";
import RctViewport from "./RctViewport.jsx";
import RctPoissonDistribution from "./RctPoissonDistribution.jsx";
import RctGibbsEnergy from "./RctGibbsEnergy.jsx";
import RctAminoAcidTable from "./RctAminoAcidTable.jsx";
import RctCellComponents from "./RctCellComponents.jsx";
import RctNucleicAcidsTable from "./RctNucleicAcidsTable.jsx";
import RctUnicellularTrophism from "./RctUnicellularTrophism.jsx";
import RctRnaCodonTable from "./RctRnaCodonTable.jsx";

import styles from './App.css';

class App extends React.Component {
	static views = {
		RctGibbsEnergy: <RctGibbsEnergy/>,
		RctPoissonDistribution: <RctPoissonDistribution/>,
		RctAminoAcidTable: <RctAminoAcidTable/>,
		RctCellComponents: <RctCellComponents/>,
		RctNucleicAcidsTable: <RctNucleicAcidsTable/>,
		RctUnicellularTrophism: <RctUnicellularTrophism/>,
		RctRnaCodonTable: <RctRnaCodonTable/>
	}
	constructor() {
		super();
		this.state = {
			menuVisible: false, 
			viewportContents: <RctGibbsEnergy/>
		};
		//this.handleMenuInput = this.handleMenuInput.bind( this )
	}
	handleHeaderInput = ( buttonId ) => {
		if ( buttonId === "toggleMenuButton" ) {
			this.setState(( prevState/*, props*/ ) => {
				if ( prevState.menuVisible === true ) {
					return { menuVisible: false };
				} else /*( prevState.menuVisible === false )*/ {
					return { menuVisible: true };
				}
			});
		}
	}
	handleMenuInput = ( input ) => {
		console.log( "App.handleMenuInput()" );
		/* To update RctViewport, RctViewport requires thise code inside of it:
		componentWillReceiveProps( newProps ) {
			console.log( "RctViewport.componentWillReceiveProps()" );
			this.setState({ rctContents: newProps.rctContents })
		}
		*/
		if ( input[ "type" ] === "LOADVIEW" ) {
			this.setState(( prevState/*, props*/ ) => {
				return { viewportContents: App.views[ input[ "args" ] ] };
			});
		} else {

		}
		
		console.log( this.state.viewportContents );
	}
  render() {
  	const menuStructure = [
    		{
    			"type": "BUTTON", 
    			"caption": "Gibbs energy",
    			"action": {
    				"type": "LOADVIEW",
    				"args": "RctGibbsEnergy"
    			}
    		},{
    			"type": "BUTTON", 
    			"caption": "Poisson distribution",
    			"action": {
    				"type": "LOADVIEW",
    				"args": "RctPoissonDistribution"
    			}
    		},{
    			"type": "BUTTON", 
    			"caption": "Amino acid table",
    			"action": {
    				"type": "LOADVIEW",
    				"args": "RctAminoAcidTable"
    			}
    		},{
    			"type": "BUTTON", 
    			"caption": "Cell component list",
    			"action": {
    				"type": "LOADVIEW",
    				"args": "RctCellComponents"
    			}
    		}    		,{
    			"type": "BUTTON", 
    			"caption": "Nucleic acid table",
    			"action": {
    				"type": "LOADVIEW",
    				"args": "RctNucleicAcidsTable"
    			}
    		}    		,{
    			"type": "BUTTON", 
    			"caption": "Unicellular trophism table",
    			"action": {
    				"type": "LOADVIEW",
    				"args": "RctUnicellularTrophism"
    			}
    		},{
    			"type": "BUTTON", 
    			"caption": "RNA codon table",
    			"action": {
    				"type": "LOADVIEW",
    				"args": "RctRnaCodonTable"
    			}
    		}
    	]
    return (
      <div className="App">
      	<RctHeader rctOnInput={ this.handleHeaderInput }/>
      	<RctMenu
      		rctVisible={ this.state.menuVisible }
      		rctStructure={ menuStructure }
      		rctOnInput={ this.handleMenuInput }
      	/>
      	<RctViewport rctContents={ this.state.viewportContents }/>
      </div>
    );
  }

}

export default App;