import React, { Component } from 'react';
import './App.css';
import NucleicAcidsTable from './NucleicAcidsTable';
import AminoAcidTable from './AminoAcidTable';
import RnaCodonAminoAcidTranslationTable from './RnaCodonAminoAcidTranslationTable';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NucleicAcidsTable/>
        <br/>
        <AminoAcidTable/>
        <br/>
        <RnaCodonAminoAcidTranslationTable/>
      </div>
    );
  }

}

function parseDataTable( data, colDelim, rowDelim ) {
	
}

export default App;