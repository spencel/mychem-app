import React, { Component } from 'react';
//import './FlashcardApplet.css';

class FlashcardDeck {

	static idCounter = -1;
	static byId = {};

	constructor( arFlashCards ) {
		this.id = ++this.constructor.idCounter;
		this.constructor.byId[this.id] = this;

		if ( arFlashCards === undefined ) {
			this.arFlashCards = [];
		} else {
			this.arFlashCards = arFlashCards;
		}
	}

	add( Flashcards ) {

		this.arFlashCards.push( Flashcards )

	}

	shuffle() {
		for (var i = 0; i < this.arFlashCards.length - 1; i++) {
      var j = i + Math.floor(Math.random() * (this.arFlashCards.length - i));

      var temp = this.arFlashCards[j];
      this.arFlashCards[j] = this.arFlashCards[i];
      this.arFlashCards[i] = temp;
    }
	}

}

class Flashcard {

	static idCounter = -1;
	static byId = {};

	constructor( front, back ) {
		this.id = ++this.constructor.idCounter;
		this.constructor.byId[this.id] = this;

		this.front = front;
		this.back = back;
	}

}

class FlashcardApplet extends Component {

	render() {
		return (
			<div></div>
		);
	}

}

export {
	Flashcard,
	FlashcardApplet,
	FlashcardDeck
};