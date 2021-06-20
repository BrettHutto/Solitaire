import * from "./objects.js";

const game = () => {
	let deck = [];

	for (let i = 1; i <= 13; i++) {
		for (let j = 1; j <= 4; j++) {
			const card = new Card(i, j); // i = rank, j = suit
			deck.push(card);  // should have 1 "spades" to "hearts", 2 "spades" to "hearts", etc.
		}
	}
	
	// shuffle
	for (let i = 0; i < deck.length; i++){
		const randIndex = Math.floor(Math.random() * (i + 1));
		[deck[i], deck[randIndex]] = [deck[randIndex], deck[i]];
	}
	
	// create, display and add cards to LanePiles
	for (let i = 1; i <= 7; i++) {
		const spliceStartingIndex = this._upCards.length - 1 - i;
		const cardsToAdd = deck.splice(spliceStartingIndex, i);
		const gameLanePile = new LanePile(cardsToAdd);
		gameLanePile.display(i);
	}
	
	// create and display SortedPiles
	for (let i = 1; i <= 4; i++) {
		const gameSortedPile = new SortedPile(i);
		gameSortedPile.display(i);
	}
	
	gamePickPile = new PickPile(deck); // all the cards in the LanePiles were spliced off
	gamePickPile.display();
}

