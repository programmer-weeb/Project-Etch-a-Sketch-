function populateBoard(size) {
	let board = document.querySelector(".board");
	board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
	// board.textContent = '';
	// remove all existing before populate
	board.innerHTML = "";

	for (let i = 0; i < size * size; i++) {
		let square = document.createElement("div");
		square.style.backgroundColor = "blue";
		// square.style.border = '1px solid black'

		board.appendChild(square);
		board.insertAdjacentElement("beforeend", square);
	}
}
populateBoard(16);
function changeSize(input) {
	if (input >= 2 || input <= 100) {
		populateBoard(input);
	} else {
        console.log('invalid input');
    }
}
