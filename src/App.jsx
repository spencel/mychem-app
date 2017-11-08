// Library
import React from "react";
import * as RctUserInterface from "./user-interface/RctUserInterface.jsx";
import RctFormula from "./formula/RctFormula.jsx";
import * as RctBiology from "./biology/RctBiology.jsx";

// Styles
import styles from "./App.css";

// Data
import RctBiologyJson from "./biology/RctBiology.json"
import RctFormulaJson from "./formula/RctFormula.json";

class App extends React.Component {
  static menuStructure = [];
  static viewList = {};
  static buildMenuAndViewList() {
    App.menuStructure = [
        {
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
        }       ,{
          "type": "BUTTON", 
          "caption": "Nucleic acid table",
          "action": {
            "type": "LOADVIEW",
            "args": "RctNucleicAcidsTable"
          }
        }       ,{
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
    App.viewList = {
      RctAminoAcidTable: <RctBiology.RctAminoAcidTable/>,
      RctCellComponents: <RctBiology.RctCellComponents/>,
      RctNucleicAcidsTable: <RctBiology.RctNucleicAcidsTable/>,
      RctUnicellularTrophism: <RctBiology.RctUnicellularTrophism/>,
      RctRnaCodonTable: <RctBiology.RctRnaCodonTable/>
    }
    for ( var key in RctFormulaJson ) {
      if ( RctFormulaJson.hasOwnProperty( key ) ) {
        App.menuStructure.push({
        "type": "BUTTON",
          "caption": RctFormulaJson[ key ].caption,
          "action":{
            "type": "LOADVIEW",
            "args": key
          }
        });
        App.viewList[ key ] = <RctFormula rctData={RctFormulaJson[ key ].content}/>;
      }
    }
    for ( var key in RctBiologyJson ) {
      if ( RctBiologyJson.hasOwnProperty( key ) ) {
        App.menuStructure.push({
        "type": "BUTTON",
          "caption": RctBiologyJson[ key ].caption,
          "action":{
            "type": "LOADVIEW",
            "args": key
          }
        });
        App.viewList[ key ] = <RctFormula rctData={RctBiologyJson[ key ].content}/>;
        console.log( App.viewList )
      }
    }
  }
	constructor() {
		super();
    App.buildMenuAndViewList();
		this.state = {
			menuVisible: false, 
			viewportContents: App.viewList.RctExponentialGrowth
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
			console.log("input[ \"type\" ]: " + input[ "type" ])
			console.log("input[ \"args\" ]: " + input[ "args" ])
			this.setState(( prevState/*, props*/ ) => {
				return { viewportContents: App.viewList[ input[ "args" ] ] };
			});
		} else {

		}
		
		//console.log( this.state.viewportContents );
	}
  render() {
  
    return (
      <div className="App">
      	<RctUserInterface.RctHeader rctOnInput={ this.handleHeaderInput }/>
      	<RctUserInterface.RctMenu
      		rctVisible={ this.state.menuVisible }
      		rctStructure={ App.menuStructure }
      		rctOnInput={ this.handleMenuInput }
      	/>
      	<RctUserInterface.RctViewport rctContents={ this.state.viewportContents }/>
      </div>
    );
  }

}

export default App;