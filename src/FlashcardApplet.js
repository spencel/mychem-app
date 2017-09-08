import React, { Component } from 'react';
//import './FlashcardApplet.css';

var flashcards = [
	["angiogenesis", "the physiological process through which new blood vessels form from pre-existing vessels."],
	["metastasis", "the development of secondary malignant growths at a distance from a primary site of cancer."],
]

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

	static addNew( front, back ) {

	}

}

class FlashcardApplet extends Component {

	constructor(props) {
		super(props);
		this.state = {
			front: "",
			back: ""
		}
		this.handleFrontChange = this.handleFrontChange.bind(this);
		this.handleBackChange = this.handleBackChange.bind(this);
  	this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleSubmit( event ) {
		console.log( this.state.front );
		console.log( this.state.back );
		event.preventDefault();
	}
	handleFrontChange( event ) {
		this.setState({ front: event.target.value });
	}
	handleBackChange( event ) {
		this.setState({ back: event.target.value });
	}

	render() {
		return (
			<div className="FlashcardApplet" onLoad={this.main}>
				<h1>Flashcard App</h1>
				<form onSubmit={this.handleSubmit}>
					<div><label>New Card</label></div>
					<div><label>Front:<input type="text" value={this.state.front} onChange={this.handleFrontChange}/></label></div>
					<div><label>Back:<input type="text" value={this.state.back} onChange={this.handleBackChange}/></label></div>
					<div><input type="submit" value="Add"/></div>
				</form>
			</div>
		);
	}



	main() {
		var newFlashcardsDeck = new FlashcardDeck();
		var retryFlashcardsDeck = new FlashcardDeck();
		var reviewFlashcardsDeck = new FlashcardDeck();
	}

}

export {
	Flashcard,
	FlashcardApplet,
	FlashcardDeck
};