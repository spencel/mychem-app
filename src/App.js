import React, { Component } from 'react';
import './App.css';
import NucleicAcidsTable from './NucleicAcidsTable';
import AminoAcidTable from './AminoAcidTable';
import RnaCodonAminoAcidTranslationTable from './RnaCodonAminoAcidTranslationTable';
import {Flashcard, FlashcardApplet, FlashcardDeck} from './FlashcardApplet';

class App extends Component {

  static main() {
    var myDeck = new FlashcardDeck();
    myDeck.add( new Flashcard( "question1", "answer1" ) );
    myDeck.add( new Flashcard( "question2", "answer2" ) );
    myDeck.add( new Flashcard( "question3", "answer3" ) );
    myDeck.shuffle();
    console.log( myDeck );
  }

  render() {
    return (
      <div className="App" onLoad={App.main()}>
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