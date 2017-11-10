// Library
import React from "react";
import * as RctUserInterface from "./user-interface/RctUserInterface.jsx";
import RctFormula from "./formula/RctFormula.jsx";
import * as RctBiology from "./biology/RctBiology.jsx";

// Styles
import styles from "./App.css";

// Data
import RctBiologyJson from "./biology/RctBiology.json";
import RctFormulaJson from "./formula/RctFormula.json";
import RctNavMenuJson from "./user-interface/RctNavMenu.json";

class App extends React.Component {
  static menuStructure = [];
  static viewList = {};
  static buildMenuAndViewList() {
    App.menuStructure = RctNavMenuJson;
    App.viewList = {
      RctAminoAcidTable: <RctBiology.RctAminoAcidTable/>,
      RctCellComponents: <RctBiology.RctCellComponents/>,
      RctNucleicAcidsTable: <RctBiology.RctNucleicAcidsTable/>,
      RctUnicellularTrophism: <RctBiology.RctUnicellularTrophism/>,
      RctRnaCodonTable: <RctBiology.RctRnaCodonTable/>
    }
    /*for ( var key in RctFormulaJson ) {
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
    }*/
  }
	constructor() {
		super();
    App.buildMenuAndViewList();
		this.state = {
			menuVisible: false, 
			viewportContents: App.viewList.RctExponentialGrowth
		};
	}
	handleInput = ( rctEvent, args ) => {
    console.log("App.handleInput()");
    //console.log("this: ");
    //console.log(this);
    //console.log( rctEvent );
    //console.log( rctEvent.target );
    console.log( args );
		if ( args === "TOGGLE_MENU_VISIBILITY" ) {
			this.setState(( prevState/*, props*/ ) => {
				if ( prevState.menuVisible === true ) {
					return { menuVisible: false };
				} else /*( prevState.menuVisible === false )*/ {
					return { menuVisible: true };
				}
			});
		} else if ( args.class === "RctButton" ) {
      if ( args.action === "LOAD_VIEW" ) {
        console.log( RctBiology );
        console.log( RctBiology[args.args]);
        var component = args.args;
        this.setState({viewportContents: App.viewList[ component ] })
      }
    }
	}
  render() {
    var id = 5;
    return (
      <div className="App">
      	<RctUserInterface.RctHeader rctOnInput={ this.handleInput }/>
      	<RctUserInterface.RctNavMenu
      		rctVisible={ this.state.menuVisible }
      		rctStructure={ App.menuStructure }
      		rctOnInput={ this.handleInput }
      	/>
      	<RctUserInterface.RctViewport rctContents={ this.state.viewportContents }/>
      </div>
    );
  }

}

export default App;