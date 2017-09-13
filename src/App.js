import React, { Component } from 'react';
import './App.css';
import NucleicAcidsTable from './NucleicAcidsTable';
import AminoAcidTable from './AminoAcidTable';
import RnaCodonAminoAcidTranslationTable from './RnaCodonAminoAcidTranslationTable';
import {Flashcard, FlashcardApplet, FlashcardDeck} from './FlashcardApplet';
import ComGibbsEnergy from './Formulae/GibbsEnergy';
import ComUnicellularTrophism from './UnicellularTrophism';
import ComCellComponents from './CellComponents';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ComCellComponents/><br/>
        <ComUnicellularTrophism/><br/>
        <ComCellComponents/><br/>
        <FlashcardApplet/><br/>
        <ComGibbsEnergy/><br/>
        <NucleicAcidsTable/><br/>
        <AminoAcidTable/><br/>
        <RnaCodonAminoAcidTranslationTable/>
      </div>
    );
  }

}

function parseDataTable( data, colDelim, rowDelim ) {
	
}

export default App;