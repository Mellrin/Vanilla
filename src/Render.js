import { clickSquare, startGame } from "./Controller";
import { getArray, getScore } from "./State";

function Render() {
	const root = document.getElementById("root");
	root.innerHTML = "";

	let gameField = document.createElement("div");
	gameField.className = "gameField";

	let controlArea = document.createElement("div");
	controlArea.className = "control-area";

	const message = document.createElement("p");
	message.classList.add("status-message");
	message.innerHTML = `Score: ${ getScore() } `;

	let newBtn = document.createElement("button");
	newBtn.innerHTML = "New Game";
	newBtn.setAttribute("id", "NewGame");
	newBtn.addEventListener("click", startGame);

	controlArea.append(message, newBtn);
	root.append(gameField, controlArea);

	const field = getArray();
	console.log(field)

	for (let i=0;i < field.length; i++) {
		let newChild = document.createElement("div");
		newChild.classList.add("gameField__item");


		if (field[i].isOpen || field[i].value === " ") {
			newChild.innerText = field[i].value;
			newChild.style.cursor = "default";
		} else {
			newChild.dataset.id = field[i].idx;
			newChild.innerText = "🍒";
			newChild.addEventListener("click", event =>  clickSquare(event.target.dataset.id));
		}

		gameField.append(newChild);
	}
}

export { Render };
