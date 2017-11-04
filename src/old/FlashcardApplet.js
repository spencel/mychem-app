import React, { Component } from 'react';
import Globals from './Globals';
import * as jQuery from 'jquery';
//import './FlashcardApplet.css';

window.jQuery = jQuery;//

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

	constructor( front, back, reviewDate, interval, reviewDateOtherside, intervalOtherside, ) {
		this.id = ++this.constructor.idCounter;
		this.constructor.byId[this.id] = this;

		this.front = front;
		this.back = back;
		this.reviewDate = reviewDate;
		this.interval = interval;
		this.reviewDateOtherside = reviewDateOtherside;
		this.intervalOtherside = intervalOtherside;
	}

}

class FlashcardApplet extends Component {

	static newFlashcardsDeck = new FlashcardDeck();
	static retryFlashcardsDeck = new FlashcardDeck();
	static reviewFlashcardsDeck = new FlashcardDeck();

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
		var today = new Date();
		this.constructor.newFlashcardsDeck.add( new Flashcard( 
			this.state.front,
			this.state.back,
			today,
			0,
			today,
			0
		));
		this.saveToDatabase();
		this.setState({
			front: "",
			back: ""
		});
		event.preventDefault();
	}
	handleFrontChange( event ) {
		this.setState({ front: event.target.value });
	}
	handleBackChange( event ) {
		this.setState({ back: event.target.value });
	}
	saveToDatabase() {
		var strData = "";
		for ( var id in Flashcard.byId ) {
		    if ( Flashcard.byId.hasOwnProperty( id ) ) {
		    	var flashcard = Flashcard.byId[ id ];
		        strData += id
		        + "\t" + flashcard.front
		        + "\t" + flashcard.back
		        + "\t" + flashcard.reviewDate
		        + "\t" + flashcard.interval
		        + "\t" + flashcard.reviewDateOtherside
		        + "\t" + flashcard.intervalOtherside + "\n";
		    }
		}
		jQuery.ajax({
			method: "POST",
			url: Globals.phpDir + "/FlashcardApplet/saveToDatabase.php",
			data: { strData: strData },
			dataType: "text",
			success: function() {
				console.log( "success" );
			},
			error: function() {
				console.log( "error" );
			},
			complete: function() {
				console.log( "complete" );
			}			
		});
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
		
	}

}

export {
	Flashcard,
	FlashcardApplet,
	FlashcardDeck
};