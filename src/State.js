let prevID = null;
let score = 0;
let matchedPairs = 0;
let activePairs = 9;
const wholeLenght = 54;

let cards = new Array(18).fill().map((el,i) => {
	return { value: " ", idx: i}
});

function increaseScore() {
	return score = score + activePairs *42;
}

function decreaseScore() {
	return score = score - matchedPairs *42;
}

function getScore() {
	return score;
}

function getArray() {
	return cards
}

function turnAllCards(bool) {
	cards = cards.map(obj=>({...obj, isOpen: bool}));
}

function isEqual(val) {
	return getArray()[prevID].value === val
}

function getPrev (){
	return prevID
}

function showCard(id) {
	cards = cards.map((el) => {
		if (el.idx === id) {
			return {...el, isOpen: true}
		} else {
			return {...el}
		}
	});

	if (prevID === null){
		prevID = getArray()[id].idx;
	}
}

function hideCard(id) {
	//let idx = getArray()[id].idx;
	let val = getArray()[id].value;

	cards = cards.map((el) => {
		if (el.idx === id || el.idx === prevID) {
			return {...el, isOpen: false}
		} else {
			return {...el}
		}
	});


	if ( isEqual(val) ) {
		increaseScore();
		matchedPairs++;
		activePairs--;
		cards = cards.map((el) => {
			if (el.idx === id || el.idx === prevID) {
				return {...el, value: " "}
			} else {
				return {...el}
			}
		});
	} else {
		decreaseScore();
	}

	prevID = null;
}

function createCards() {
	prevID = null;
	score = 0;
	matchedPairs = 0;
	activePairs = 9;
	let wholeArray = [...Array(wholeLenght)].map(() => Math.round(Math.random() * wholeLenght));
	wholeArray = [...new Set(wholeArray)];
	const croppedArray = wholeArray.slice(0, 9);
	let Field = [...croppedArray, ...croppedArray].sort(() => Math.random() - 0.5);
	cards = new Array(18).fill().map((e,i) => {
		return {value: Field[i], idx: i, isOpen: false}
	});
}

function gameIsOver() {
	return activePairs === 0;
}

export  { getArray, showCard, getScore, createCards, hideCard, getPrev, turnAllCards, gameIsOver }
