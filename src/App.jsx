// Library
import React from "react";
import * as RctUserInterface from "./user-interface/RctUserInterface.jsx";
import RctFormula from "./formula/RctFormula.jsx";

// Styles
import styles from "./App.css";

// Json
import RctNavMenuJson from "./user-interface/RctNavMenu.json";
import RctBiologyJson from "./biology/RctBiology.json";
import RctBiologyMenuJson from "./biology/RctBiologyMenu.json";
import RctFormulaJson from "./formula/RctFormula.json";
import RctFormulaMenuJson from "./formula/RctFormulaMenu.json"
import RctAnotherSubcategoryJson from "./another-subcategory/RctAnotherSubcategory.json";
import RctAnotherSubcategoryMenuJson from "./another-subcategory/RctAnotherSubcategoryMenu.json";
import RctKinematicsJson from "./kinematics/RctKinematics.json";
import RctKinematicsMenuJson from "./kinematics/RctKinematicsMenu.json";
import RctThermodynamicsJson from "./thermodynamics/RctThermodynamics.json";
import RctThermodynamicsMenuJson from "./thermodynamics/RctThermodynamicsMenu.json";
import exampleTableDataJson from "./user-interface/exampleTableData.json";

class App extends React.Component {
  static menuStructure = [];
  static viewList = {};
  static buildMenuAndViewList() {
  	//console.log("App.buildMenuAndViewList()");
    App.menuStructure = RctNavMenuJson;
    App.viewList = {};
    for ( var key in RctFormulaJson ) {
      if ( RctFormulaJson.hasOwnProperty( key ) ) {
        App.viewList[ key ] = <RctFormula rctData={ RctFormulaJson[ key ] }/>;
      }
    }
    //console.log("RctBiologyJson:");
    //console.log(RctBiologyJson);
    for ( var key in RctBiologyJson ) {
    	//console.log("key: " + key );
    	if ( RctBiologyJson.hasOwnProperty( key ) ) {
    		//console.log("RctBiologyJson[ key ]:");
    		//console.log(RctBiologyJson[ key ]);
        App.viewList[ key ] = <RctFormula rctData={ RctBiologyJson[ key ] }/>;
      }
    }
    for ( var key in RctAnotherSubcategoryJson ) {
      if ( RctAnotherSubcategoryJson.hasOwnProperty( key ) ) {
        App.viewList[ key ] = <RctFormula rctData={ RctAnotherSubcategoryJson[ key ] }/>;
      }
    }
    for ( var key in RctKinematicsJson ) {
      if ( RctKinematicsJson.hasOwnProperty( key ) ) {
        App.viewList[ key ] = <RctFormula rctData={ RctKinematicsJson[ key ] }/>;
      }
    }
    for ( var key in RctThermodynamicsJson ) {
      if ( RctThermodynamicsJson.hasOwnProperty( key ) ) {
        App.viewList[ key ] = <RctFormula rctData={ RctThermodynamicsJson[ key ] }/>;
      }
    }
  }
	constructor() {
		super();
    App.buildMenuAndViewList();
		this.state = {
			menuVisible: false, 
			//viewportContents: App.viewList.RctKinematicEquations,
			//viewportContents: <RctUserInterface.RctTable rctData={ exampleTableDataJson }/>,
      viewportContents: <div>Hello world!</div>,
			subMenuList: {
				RctNavMenu: RctNavMenuJson,
				RctFormulaMenu: RctFormulaMenuJson,
				RctBiologyMenu: RctBiologyMenuJson,
				RctKinematicsMenu: RctKinematicsMenuJson,
				RctThermodynamicsMenu: RctThermodynamicsMenuJson
			}
		};
	}
	handleInput = ( args ) => {
    console.log("App.handleInput()");
    //console.log("this: ");
    //console.log(this);
    //console.log( rctEvent );
    //console.log( rctEvent.target );
    console.log("args:");
    console.log(args);
    switch ( args.action ) {
			case "TOGGLE_MENU_VISIBILITY":
				this.setState(( prevState/*, props*/ ) => {
					if ( prevState.menuVisible === true ) {
						return { menuVisible: false };
					} else /*( prevState.menuVisible === false )*/ {
						return { menuVisible: true };
					}
				});
			break;
			case "LOAD_VIEW":
				//console.log("case: \"LOAD_VIEW\"");
        var componentName = args.args;
        //console.log("componentName: " + componentName);
        this.setState({viewportContents: App.viewList[ componentName ] })
			break;
	   }
	}
  render() {
  	console.log("App.render()");
    var id = 5;
    console.log("this.state.viewportContents:");
    console.log(this.state.viewportContents);
    return (
      <div className="App">
      	<RctUserInterface.RctHeader rctOnInput={ this.handleInput }/>
      	<RctUserInterface.RctNavMenu
      		rctVisible = { this.state.menuVisible }
      		rctStructure = { App.menuStructure }
      		rctOnInput = { this.handleInput }
      		rctSubMenuList = { this.state.subMenuList }
      	/>
      	<RctUserInterface.RctViewport rctContents={ this.state.viewportContents }/>
      </div>
    );
  }

}

export default App;