const firstPlayerField = document.querySelector("#firstPlayer");
const secondPlayerField = document.querySelector("#secondPlayer");
const fleetButtonsArea = document.querySelector(".fleet-buttons");
const sizeButtonsArea = document.querySelector(".size-buttons");

function Ship(name, amount, size) {
	this.name = name,
		this.amount = amount,
		this.size = size,
		this.counter = amount,
		this.plasedShip = size
};

Ship.prototype.shipOnField = function () {
	console.log(this.plasedShip);
	if (this.plasedShip > 0) {
		this.plasedShip = this.plasedShip - 1;

	} else {
		console.log(`Your ${this.name}s has already sailed.`)
	}
};

const firstPlayerFleet = {
	battleship: [],
	cruisers: [],
	destroyer: [],
	tarpedBoats: [],
	unit: [],
	allowCellX: [],
	allowCellY: [],
	intFromCoordinate: [],
	leterFromCoordinate: [],
	fleet: [],
	getfleet: function (sizeId) {
		if (sizeId === "mini") {
			const destroyer = new Ship("Destroyer", 1, 2);
			const tarpedBoats = new Ship("Tarped-boat", 2, 1);
			this.fleet.push(destroyer, tarpedBoats);
		} else if (sizeId === "standard") {
			const battleship = new Ship("Battleship", 1, 4);
			const cruisers = new Ship("Cruiser", 2, 3);
			const destroyer = new Ship("Destroyer", 3, 2);
			const tarpedBoats = new Ship("Tarped-boat", 4, 1);
			this.fleet.push(battleship, cruisers, destroyer, tarpedBoats);
		} else if (sizeId === "big") {
			const battleship = new Ship("Battleship", 2, 4);
			const cruisers = new Ship("Cruiser", 3, 3);
			const destroyer = new Ship("Destroyer", 4, 2);
			const tarpedBoats = new Ship("Tarped-boat", 5, 1);
			this.fleet.push(battleship, cruisers, destroyer, tarpedBoats);
		} else if (sizeId === "huge") {
			const battleship = new Ship("Battleship", 3, 4);
			const cruisers = new Ship("Cruiser", 4, 3);
			const destroyer = new Ship("Destroyer", 5, 2);
			const tarpedBoats = new Ship("Tarped-boat", 6, 1);
			this.fleet.push(battleship, cruisers, destroyer, tarpedBoats);
		}
	},
};

const battleField = {
	chars: [" ", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
	rows: 0,
	columns: 0,

	display: function (fieldContainer, rows, columns) {
		this.rows = rows;
		this.columns = columns;
		if (fieldContainer.innerHTML) {
			fieldContainer.innerHTML = "";
		};

		for (let i = 0; i <= columns; i++) {
			const charStr = document.createElement("div");
			charStr.className = "char"
			charStr.innerHTML = this.chars[i];
			const row = document.createElement("div");
			row.appendChild(charStr);
			row.classList.add('column');
			fieldContainer.appendChild(row);

			if (i === 0) {
				for (let j = 1; j <= rows; j++) {
					const charNum = document.createElement("div");
					charNum.className = "char"
					charNum.innerHTML = j;
					row.appendChild(charNum);
				};
			} else {
				for (let j = 1; j <= rows; j++) {
					const column = document.createElement("div");
					column.classList.add('battleCell');
					column.id = `${this.chars[i]}${j}`;
					row.appendChild(column);
				};
			};
		};
	},
};

// console.log(battleField);

const view = {
	message1: "Message 1",
	message2: "Message 2",
	message3: "Message 3",
	displayMessage: function () {
		document.querySelector(".messageArea").innerHTML = this.message1;
	},
	displayHit: function (event) {
		if (!event.target.classList.contains("miss")) {
			event.target.classList.add("hit");
		}
	},
	displayMiss: function (event) {
		if (!event.target.classList.contains("hit")) {
			event.target.classList.add("miss");
		}
	},
	fleetDescription: function (event) {
		firstPlayerFleet.fleet = [];
		fleetButtonsArea.innerHTML = "";
		if (event.target.id === "mini") {
			firstPlayerFleet.getfleet(event.target.id);
			for (let i = 0; i < firstPlayerFleet.fleet.length; i++) {
				const button = document.createElement("button");
				button.id = firstPlayerFleet.fleet[i].name;
				firstPlayerFleet.fleet[i].counter = firstPlayerFleet.fleet[i].amount;
				button.innerHTML = `${firstPlayerFleet.fleet[i].name} - ${firstPlayerFleet.fleet[i].counter}/${firstPlayerFleet.fleet[i].amount} (${firstPlayerFleet.fleet[i].size} cell)`;
				fleetButtonsArea.appendChild(button);
			}
			battleField.display(firstPlayerField, 5, 5);
		} else if (event.target.id === "standard") {
			firstPlayerFleet.getfleet(event.target.id);
			for (let i = 0; i < firstPlayerFleet.fleet.length; i++) {
				const button = document.createElement("button");
				button.id = firstPlayerFleet.fleet[i].name;
				firstPlayerFleet.fleet[i].counter = firstPlayerFleet.fleet[i].amount;
				button.innerHTML = `${firstPlayerFleet.fleet[i].name} - ${firstPlayerFleet.fleet[i].counter}/${firstPlayerFleet.fleet[i].amount} (${firstPlayerFleet.fleet[i].size} cell)`;
				fleetButtonsArea.appendChild(button);
			}
			battleField.display(firstPlayerField, 10, 10);
		} else if (event.target.id === "big") {
			firstPlayerFleet.getfleet(event.target.id);
			for (let i = 0; i < firstPlayerFleet.fleet.length; i++) {
				const button = document.createElement("button");
				button.id = firstPlayerFleet.fleet[i].name;
				firstPlayerFleet.fleet[i].counter = firstPlayerFleet.fleet[i].amount;
				button.innerHTML = `${firstPlayerFleet.fleet[i].name} - ${firstPlayerFleet.fleet[i].counter}/${firstPlayerFleet.fleet[i].amount} (${firstPlayerFleet.fleet[i].size} cell)`;
				fleetButtonsArea.appendChild(button);
			}
			battleField.display(firstPlayerField, 15, 15);
		} else if (event.target.id === "huge") {
			firstPlayerFleet.getfleet(event.target.id);
			for (let i = 0; i < firstPlayerFleet.fleet.length; i++) {
				const button = document.createElement("button");
				button.id = firstPlayerFleet.fleet[i].name;
				firstPlayerFleet.fleet[i].counter = firstPlayerFleet.fleet[i].amount;
				button.innerHTML = `${firstPlayerFleet.fleet[i].name} - ${firstPlayerFleet.fleet[i].counter}/${firstPlayerFleet.fleet[i].amount} (${firstPlayerFleet.fleet[i].size} cell)`;
				fleetButtonsArea.appendChild(button);
			}
			battleField.display(firstPlayerField, 20, 20);
		}
	},
	setActiveStatus: function (event) {
		const sizeBtns = document.querySelectorAll(`.${event.target.parentNode.className} button`);
		for (let i = 0; i < sizeBtns.length; i++) {
			if (sizeBtns[i].className = "active") {
				sizeBtns[i].removeAttribute("class");
			}
		}
		event.target.className = "active";
	},
};

window.onload = function () {
	for (let i = 0; i < sizeButtonsArea.children.length; i++) {
		if (sizeButtonsArea.children[i].classList.contains("active")) {
			firstPlayerFleet.getfleet(sizeButtonsArea.children[i].id);
			for (let i = 0; i < firstPlayerFleet.fleet.length; i++) {
				const button = document.createElement("button");
				button.id = firstPlayerFleet.fleet[i].name;
				firstPlayerFleet.fleet[i].counter = firstPlayerFleet.fleet[i].amount;
				button.innerHTML = `${firstPlayerFleet.fleet[i].name} - ${firstPlayerFleet.fleet[i].counter}/${firstPlayerFleet.fleet[i].amount} (${firstPlayerFleet.fleet[i].size} cell)`;
				fleetButtonsArea.appendChild(button)
			}
		}
	}
	battleField.display(firstPlayerField, 10, 10);

	sizeButtonsArea.addEventListener("click", function (event) {
		if (!event.target.classList.contains("active") && event.target.parentNode.className === "size-buttons") {
			view.setActiveStatus(event);
			view.fleetDescription(event);
		}
	});

	fleetButtonsArea.addEventListener("click", function (event) {
		if (!event.target.classList.contains("active") && event.target.parentNode.className === "fleet-buttons") {
			view.setActiveStatus(event);
		}
	});

	firstPlayerField.addEventListener("click", function (event) {
		for (let i = 0; i < fleetButtonsArea.children.length; i++) {
			if (fleetButtonsArea.children[i].classList.contains("active") && fleetButtonsArea.children[i].id === firstPlayerFleet.fleet[0].name && event.target.id) {

				toSetSthip(event, firstPlayerFleet.battleship, i);
				break;
			} else if (fleetButtonsArea.children[i].classList.contains("active") && fleetButtonsArea.children[i].id === firstPlayerFleet.fleet[1].name && event.target.id) {

				toSetSthip(event, firstPlayerFleet.cruisers, i);

				break;
			} else if (fleetButtonsArea.children[i].classList.contains("active") && fleetButtonsArea.children[i].id === firstPlayerFleet.fleet[2].name && event.target.id) {

				toSetSthip(event, firstPlayerFleet.destroyer, i);
				break;
			} else if (fleetButtonsArea.children[i].classList.contains("active") && fleetButtonsArea.children[i].id === firstPlayerFleet.fleet[3].name && event.target.id) {

				toSetSthip(event, firstPlayerFleet.tarpedBoats, i);
				break;
			}
		}

	})
};

function toSetSthip(event, arrayShip, index) {
	if (firstPlayerFleet.fleet[index].plasedShip > 0) {
		--firstPlayerFleet.fleet[index].plasedShip;
		firstPlayerFleet.unit.push(event.target.id);

		if (firstPlayerFleet.unit.length === firstPlayerFleet.fleet[index].size) {
			--firstPlayerFleet.fleet[index].counter;
			fleetButtonsArea.children[index].innerHTML = `${firstPlayerFleet.fleet[index].name} - ${firstPlayerFleet.fleet[index].counter}/${firstPlayerFleet.fleet[index].amount} (${firstPlayerFleet.fleet[index].size} cell)`;
			arrayShip.push(firstPlayerFleet.unit);
			firstPlayerFleet.unit = [];
			console.log(arrayShip);
		}

		event.target.style.backgroundColor = "var(--fontColorActive)";
		event.target.style.borderColor = "var(--fontColorActive)";
		event.target.classList.add("selectedCell");



		getShipCells(event, firstPlayerFleet.unit, index);



	}
};

// console.log("a1".split(""));
// console.log("a2".split(""));
// battleField.chars.indexOf(coordinate[0]) + 1
// battleField.chars.indexOf(coordinate[coordinate.length - 1][0])
// console.log(getNumFromStr('z1'));

function getShipCells(event, coordinate, index) {
	console.log(coordinate[0]);
	if (coordinate.length === 1) {

		firstPlayerFleet.getIntLeter = battleField.chars.indexOf(coordinate[coordinate.length - 1][0]);
		console.log(firstPlayerFleet.getIntLeter);
		firstPlayerFleet.getInt = +coordinate[coordinate.length - 1][1];
		console.log(firstPlayerFleet.getInt);

		for (let i = 0; i < firstPlayerFleet.fleet[index].size; i++) {

			if (firstPlayerFleet.getIntLeter + i <= battleField.columns) {
				firstPlayerFleet.allowCellX.push(`${battleField.chars[firstPlayerFleet.getIntLeter + i]}` + `${firstPlayerFleet.getInt}`);
			}

			if (Math.sign(firstPlayerFleet.getIntLeter - i) !== -1 && firstPlayerFleet.getIntLeter - i !== 0) {
				firstPlayerFleet.allowCellX.push(`${battleField.chars[firstPlayerFleet.getIntLeter - i]}` + `${firstPlayerFleet.getInt}`);
			}

			if (firstPlayerFleet.getInt + i <= battleField.columns) {
				firstPlayerFleet.allowCellY.push(`${battleField.chars[firstPlayerFleet.getIntLeter]}` + `${firstPlayerFleet.getInt + i}`);
			}

			if (Math.sign(firstPlayerFleet.getInt - i) !== -1 && firstPlayerFleet.getInt - i !== 0) {
				firstPlayerFleet.allowCellY.push(`${battleField.chars[firstPlayerFleet.getIntLeter]}` + `${firstPlayerFleet.getInt - i}`);
			}
		}
		console.log(firstPlayerFleet.allowCellX);
		console.log(firstPlayerFleet.allowCellY);


		for (let i = 0; i < firstPlayerFleet.allowCellX.length; i++) {
			if (!document.querySelector(`#${firstPlayerFleet.allowCellX[i]}`).classList.contains("selectedCell")) {
				document.querySelector(`#${firstPlayerFleet.allowCellX[i]}`).style.backgroundColor = "var(--borderBtnColorHover)";
			}
		}

		for (let i = 0; i < firstPlayerFleet.allowCellY.length; i++) {
			if (!document.querySelector(`#${firstPlayerFleet.allowCellY[i]}`).classList.contains("selectedCell")) {
				document.querySelector(`#${firstPlayerFleet.allowCellY[i]}`).style.backgroundColor = "var(--borderBtnColorHover)";
			}
		}
	}
	// else if (coordinate.length === 2 && firstPlayerFleet.allowCellX.includes(coordinate[1])) {

	// 	for (let l = 0; l < firstPlayerFleet.allowCellX.length; l++) {
	// 		if (!document.querySelector(`#${firstPlayerFleet.allowCellX[l]}`).classList.contains("selectedCell")) {
	// 			// document.querySelector(`#${firstPlayerFleet.allowCellX[l]}`).style.backgroundColor = "transparent";
	// 			// document.querySelector(`#${firstPlayerFleet.allowCellY[l]}`).style.backgroundColor = "transparent";
	// 		}

	// 	}

	// } else if (coordinate.length === 2 && firstPlayerFleet.allowCellY.includes(coordinate[1])) {
	// 	for (let l = 0; l < firstPlayerFleet.allowCellX.length; l++) {
	// 		if (!document.querySelector(`#${firstPlayerFleet.allowCellX[l]}`).classList.contains("selectedCell")) {
	// 			// document.querySelector(`#${firstPlayerFleet.allowCellX[l]}`).style.backgroundColor = "transparent";
	// 			// document.querySelector(`#${firstPlayerFleet.allowCellY[l]}`).style.backgroundColor = "transparent";
	// 		}
	// 	}
	// }

}

// else if (coordinate.length - 1 === 1) {



// } else if (coordinate.length - 1 === 2) {

// } else if (coordinate.length - 1 === 3) {

// } else if (coordinate.length - 1 === 4) {

// }