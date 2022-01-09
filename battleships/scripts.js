const firstPlayerField = document.querySelector("#firstPlayer");
const secondPlayerField = document.querySelector("#secondPlayer");
const fleetButtonsArea = document.querySelector(".fleet-buttons");
const sizeButtonsArea = document.querySelector(".size-buttons");

function Ship(name, amount, size) {
	this.name = name,
		this.amount = amount,
		this.size = size,
		this.counter = amount,
		this.plasedShip = size,
		this.coordinates = []
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
	battleship: {},
	cruisers: {},
	destroyer: {},
	tarpedBoats: {},
	unit: [],
	allowCellX: [],
	allowCellY: [],
	intFromCoordinate: [],
	leterFromCoordinate: [],
	fleet: [],
	getfleet: function (sizeId) {
		if (sizeId === "mini") {
			this.destroyer = new Ship("Destroyer", 1, 2);
			this.tarpedBoats = new Ship("Tarped-boat", 2, 1);
			this.fleet.push(this.destroyer, this.tarpedBoats);
		} else if (sizeId === "standard") {
			this.battleship = new Ship("Battleship", 1, 4);
			this.cruisers = new Ship("Cruiser", 2, 3);
			this.destroyer = new Ship("Destroyer", 3, 2);
			this.tarpedBoats = new Ship("Tarped-boat", 4, 1);
			this.fleet.push(this.battleship, this.cruisers, this.destroyer, this.tarpedBoats);
		} else if (sizeId === "big") {
			this.battleship = new Ship("Battleship", 2, 4);
			this.cruisers = new Ship("Cruiser", 3, 3);
			this.destroyer = new Ship("Destroyer", 4, 2);
			this.tarpedBoats = new Ship("Tarped-boat", 5, 1);
			this.fleet.push(this.battleship, this.cruisers, this.destroyer, this.tarpedBoats);
		} else if (sizeId === "huge") {
			this.battleship = new Ship("Battleship", 3, 4);
			this.cruisers = new Ship("Cruiser", 4, 3);
			this.destroyer = new Ship("Destroyer", 5, 2);
			this.tarpedBoats = new Ship("Tarped-boat", 6, 1);
			this.fleet.push(this.battleship, this.cruisers, this.destroyer, this.tarpedBoats);
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
		let allCells = document.querySelectorAll(".battleCell");
		for (let el of allCells) {
			if (el.classList.contains("selectedCell") || el.classList.contains("allowedCell")) {
				el.classList.remove("selectedCell", "allowedCell");
				firstPlayerFleet.allowCellX = [];
				firstPlayerFleet.allowCellY = [];
				firstPlayerFleet.unit = [];
			}
		}

		if (!event.target.classList.contains("active") && event.target.parentNode.className === "fleet-buttons") {
			view.setActiveStatus(event);
		}
	});

	firstPlayerField.addEventListener("click", function (event) {
		for (let i = 0; i < fleetButtonsArea.children.length; i++) {
			if (fleetButtonsArea.children[i].classList.contains("active") && fleetButtonsArea.children[i].id === firstPlayerFleet.fleet[i].name && event.target.id) {

				toSetShip(event, firstPlayerFleet[i], i);
				break;
			}
		}
	});
};

function toSetShip(event, arrayShip, index) {
	if (firstPlayerFleet.fleet[index].plasedShip > 0) {
		--firstPlayerFleet.fleet[index].plasedShip;
		firstPlayerFleet.unit.push(event.target.id);

		console.log(firstPlayerFleet.unit);

		if (firstPlayerFleet.unit.length === firstPlayerFleet.fleet[index].size) {
			--firstPlayerFleet.fleet[index].counter;
			fleetButtonsArea.children[index].innerHTML = `${firstPlayerFleet.fleet[index].name} - ${firstPlayerFleet.fleet[index].counter}/${firstPlayerFleet.fleet[index].amount} (${firstPlayerFleet.fleet[index].size} cell)`;
			arrayShip.coordinates.push(firstPlayerFleet.unit);
			firstPlayerFleet.unit = [];
		}

		console.log(firstPlayerFleet.battleship.coordinates);

		event.target.classList.add("selectedCell");

		getShipCells(firstPlayerFleet.unit, index);
	}
};

function getShipCells(coordinate, index) {
	if (coordinate.length === 1) {

		firstPlayerFleet.getIntLeter = battleField.chars.indexOf(coordinate[coordinate.length - 1][0]);
		firstPlayerFleet.getInt = +coordinate[coordinate.length - 1][1];

		if (coordinate[coordinate.length - 1].length > 2) {
			let twodigitNumber = +(coordinate[coordinate.length - 1][1] + coordinate[coordinate.length - 1][2]);
			firstPlayerFleet.getInt = twodigitNumber;
		}

		for (let i = 0; i < firstPlayerFleet.fleet[index].size; i++) {

			if (firstPlayerFleet.getIntLeter + i <= battleField.columns) {
				firstPlayerFleet.allowCellX.push(`${battleField.chars[firstPlayerFleet.getIntLeter + i]}` + `${firstPlayerFleet.getInt}`);
			}

			if (Math.sign(firstPlayerFleet.getIntLeter - i) !== -1 && firstPlayerFleet.getIntLeter - i !== 0 && !firstPlayerFleet.allowCellX.includes(`${battleField.chars[firstPlayerFleet.getIntLeter - i]}` + `${firstPlayerFleet.getInt}`)) {
				firstPlayerFleet.allowCellX.push(`${battleField.chars[firstPlayerFleet.getIntLeter - i]}` + `${firstPlayerFleet.getInt}`);
			}

			if (firstPlayerFleet.getInt + i <= battleField.columns) {
				firstPlayerFleet.allowCellY.push(`${battleField.chars[firstPlayerFleet.getIntLeter]}` + `${firstPlayerFleet.getInt + i}`);
			}

			if (Math.sign(firstPlayerFleet.getInt - i) !== -1 && firstPlayerFleet.getInt - i !== 0 && !firstPlayerFleet.allowCellY.includes(`${battleField.chars[firstPlayerFleet.getIntLeter]}` + `${firstPlayerFleet.getInt - i}`)) {
				firstPlayerFleet.allowCellY.push(`${battleField.chars[firstPlayerFleet.getIntLeter]}` + `${firstPlayerFleet.getInt - i}`);
			}
		}
		console.log(firstPlayerFleet.allowCellX);
		console.log(firstPlayerFleet.allowCellY);

		for (let i = 0; i < firstPlayerFleet.allowCellX.length; i++) {
			if (!document.querySelector(`#${firstPlayerFleet.allowCellX[i]}`).classList.contains("selectedCell")) {
				document.querySelector(`#${firstPlayerFleet.allowCellX[i]}`).classList.add("allowedCell");
			}
		}

		for (let i = 0; i < firstPlayerFleet.allowCellY.length; i++) {
			if (!document.querySelector(`#${firstPlayerFleet.allowCellY[i]}`).classList.contains("selectedCell")) {
				document.querySelector(`#${firstPlayerFleet.allowCellY[i]}`).classList.add("allowedCell");
			}
		}
	}
}