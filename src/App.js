import React, { Component } from 'react';
import './App.css';
import AminoAcidTable from './AminoAcidTable';
import RnaCodonAminoAcidTranslationTable from './RnaCodonAminoAcidTranslationTable';

class App extends Component {

  render() {
    return (
      <div className="App">
        <AminoAcidTable/>
        <br/>
        <RnaCodonAminoAcidTranslationTable/>
      </div>
    );
  }

}

class NucleotideTable extends	Component {

	render() {
		return (
			<div className="NucleotideTable">

			</div>
		);
	}

}

function parseDataTable( data, colDelim, rowDelim ) {
	
}

export default App;