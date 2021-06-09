/* UPDATE THIS COMMENT AFTER EDITING. Last Edit: 6/5/2021
This is where all classes/objects are defined. It includes the Card class, LanePile class (for 
the areas to place cards), PickPile class (for the top left group of cards), and SortedPile 
class (for sorting the cards by rank and suit).  Also includes a deck that is an array. */


class Card {
	constructor(rank, suit) {
		this._faceUp = false; // down = false, up = true
		this._rank = rank;
		this._suit;
		this._color;

		// set suit + color
		switch (suit) {
			case 1:
				this._suit = "spades";
				this._color = "black";
				break;

			case 2:
				this._suit = "clubs";
				this._color = "black";
				break;

			case 3:
				this._suit = "diamonds";
				this._color = "red";
				break;

			case 4:
				this._suit = "hearts";
				this._color = "red";
				break;

			default:
				console.log("The suit/color was not set properly! Make sure to use 1 (spades), 2 (clubs), 3 (diamonds), or 4 (hearts) when creating an object.");
		}
	}

	flipCard() {
		this._faceUp = !this._faceUp;
	}
}

class LanePile {
	constructor(cards) { // array of cards taken out of the deck
		this._upCards = [];
		this._downCards = cards;
	}

	concatUpCards(movingCards) {
		const topCardColor = this._upCards[this._upCards.length - 1]._color;
		const topCardRank = this._upCards[this._upCards.length - 1]._rank;
		const movingBottomColor = movingCards[0]._color;
		const movingRankAbove = movingcards[0]._rank + 1;

		if ((movingBottomColor !== cardColor) && (movingRankAbove === cardRank)) {
			this._upCards = this._upCards.concat(movingCards);
		}
		else {
			console.log("The LanePile did not concatenate properly! Make sure that the colors don't match and the rank are correct. Also, make sure to pass an array.");
		}
	}

	// for when cards are moved off the lane
	moveUpCards(num) {
		const spliceStartingIndex = this._upCards.length - 1 - num;

		return this._upCards.splice(spliceStartingIndex, num);
	}

	flipTopCard() {
		const card = this._downCards.pop();
		card.flipCard();
		this._upCards.push(card);

		return card;
	}
}

class PickPile {
	constructor(cards) {
		this._upCards = [];
		this._downCards = cards;
	}

	// from down facing array to up facing array
	moveCards(num) { // num is the cards we're taking from facedown to faceup
		const spliceStartingIndex = this._upCards.length - 1 - num;
		const splicedArray = this._downCards.splice(spliceStartingIndex, num);

		splicedArray.forEach(function(card) {
			card.flipCard();
		});
		splicedArray.reverse();

		this._upCards = this._upCards.concat(splicedArray);
	}

	// for when we move the top card to lane/sorted
	popCard() {
		return this._upCards.pop();
	}

	// starting the downCard array over
	resetCards() {
		this._upCards.forEach(function(card) {
			card.flipCard();
		});
		this._upCards.reverse();

		this._downCards = this._upCards;
		this._upCards = [];
	}
}

class SortedPile {
	constructor(suit) {
		this._cards = [];
		this._suit = suit;
	}

	pushCard(card) {
		const topCardRank = this._cards.length; // can use length bc the amount of cards equals the top card's rank 
		const cardRankBelow = card.rank - 1; // check if top card is one lower than card being added

		if ((card.suit === this._suit) && (topCardRank === cardRankBelow)) {
			this._cards.push(card);
		}
		else {
			console.log("Card was not pushed to SortedPile! Make sure that the suit matches and the rank is one above the current.");
		}
	}

	// for when the player decides to move a card back to a lane
	popCard() {
		return this._cards.pop();
	}
}

let deck = [];

for (let i = 1; i <= 13; i++) {
	for (let j = 1; j <= 4; j++) {
		const card = new Card(i, j); // i = rank, j = suit
		deck.push(card);  // should have 1 "spades" to "hearts", 2 "spades" to "hearts", etc.
	}
}

