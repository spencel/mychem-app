// Library
import React from "react";
import * as RctUserInterface from "./user-interface/RctUserInterface.jsx";
import * as RctFormula from "./formula/RctFormula.jsx";
import * as RctBiology from "./biology/RctBiology.jsx";

// Styles
import styles from "./App.css";

// Data
import data from "./formula/RctMicrobeCmfr.json";

class App extends React.Component {
	static views = {
		RctGibbsEnergy: <RctFormula.RctGibbsEnergy/>,
        RctMicrobeCmfr: <RctFormula.RctMicrobeCmfr rctData={ data }/>,
        RctMonodEquation: <RctFormula.RctMonodEquation/>,
        RctProbabilityMassFunction: <RctFormula.RctProbabilityMassFunction/>,
		RctPoissonDistribution: <RctFormula.RctPoissonDistribution/>,
		RctAminoAcidTable: <RctBiology.RctAminoAcidTable/>,
		RctCellComponents: <RctBiology.RctCellComponents/>,
		RctNucleicAcidsTable: <RctBiology.RctNucleicAcidsTable/>,
		RctUnicellularTrophism: <RctBiology.RctUnicellularTrophism/>,
		RctRnaCodonTable: <RctBiology.RctRnaCodonTable/>
	}
	constructor() {
		super();
		this.state = {
			menuVisible: false, 
			viewportContents: App.views.RctMicrobeCmfr
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
                "caption": "Microbe CMFR",
                "action": {
                    "type": "LOADVIEW",
                    "args": "RctMicrobeCmfr"
                }
    		},{
                "type": "BUTTON", 
                "caption": "Monod equation",
                "action": {
                    "type": "LOADVIEW",
                    "args": "RctMonodEquation"
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
                "caption": "Probability mass function",
                "action": {
                    "type": "LOADVIEW",
                    "args": "RctProbabilityMassFunction"
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
      	<RctUserInterface.RctHeader rctOnInput={ this.handleHeaderInput }/>
      	<RctUserInterface.RctMenu
      		rctVisible={ this.state.menuVisible }
      		rctStructure={ menuStructure }
      		rctOnInput={ this.handleMenuInput }
      	/>
      	<RctUserInterface.RctViewport rctContents={ this.state.viewportContents }/>
      </div>
    );
  }

}

export default App;