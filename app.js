let color = "black";
let click = false;
document.querySelector('body').addEventListener('click', () => {
	color=!color
})
function populateBoard(size) {
	let board = document.querySelector(".board");
	board.style.border = "1px solid";
	board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
	// board.textContent = '';
	// remove all existing before populate
	board.innerHTML = "";

	for (let i = 0; i < size * size; i++) {
		let square = document.createElement("div");
		square.style.backgroundColor = "white";
		// change color on hover
		square.addEventListener("mouseover", changeSquareColor);
		// square.style.border = '1px solid black'

		board.appendChild(square);
		board.insertAdjacentElement("beforeend", square);
	}
}

function changeSquareColor(e) {
	// e.target.style.backgroundColor = "black";
	if (color == true) {
		if (color == "random") {
			this.style.backgroundColor =
				"hsla(" + Math.random() * 360 + ", 100%, 50%, 1)";
		} else {
			this.style.backgroundColor = color;
		}
	}
}

populateBoard(16);

function changeSize(input) {
	if (input >= 2 || input <= 100) {
		populateBoard(input);
	} else {
		console.log("invalid input");
	}
}

function changeColor(choice) {
	color = choice;
}

function reset() {
	let board = [...document.querySelector(".board")];
	board.forEach((element) => {
		element.style.backgroundColor = "white";
	});
}
