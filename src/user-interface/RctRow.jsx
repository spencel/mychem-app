import React from "react";

class RctRow extends React.Component {
	constructor( props ) {
    console.log("RctRow.constructor()");
		super( props );
    /*
    props = {
      rctRow
    }
    */
    console.log("props.rctData:");
    console.log(props.rctData);
    this.state = {
      jsx: this.build()
    }
	}
  build() {
    console.log("RctRow.build()");
    var jsx = [];
    var row = this.props.rctRow;
    var colCount = row.length;
    for ( var iCol = 0; iCol < colCount; iCol++ ) {
      var cell = row[ iCol ];
      jsx.push( <td>{ cell }</td> );
    }
    return jsx
  }
	render() {
    return (
     	<tr className="RctRow">{ this.state.jsx }</tr>
    );
  }
}

export default RctRow;