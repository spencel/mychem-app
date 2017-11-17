import React from "react";
import RctRow from "./RctRow.jsx";

class RctTable extends React.Component {
	constructor( props ) {
    console.log("RctTable.constructor()");
		super( props );
    /*
    props = {
      rctData
    }
    */
    console.log("props.rctData:");
    console.log(props.rctData);
    this.state = {
      jsx: this.build()
    }
	}
  build() {
    console.log("RctTable.build()");
    var jsx = [];
    var data = this.props.rctData;
    var rowCount = data.length;
    var colCount = data.length;
    for ( var iRow = 0; iRow < rowCount; iRow++ ) {
      var row = data[ iRow ];
      jsx.push( <RctRow rctRow={ row }/> );
    }
    return jsx
  }
	render() {
    return (
     	<div className="RctTable">
        <table>
          { this.state.jsx }
        </table>
      </div>
    );
  }
}

export default RctTable;