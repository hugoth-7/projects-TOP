const Gameboard = (() => {
	const board = Array(9).fill("");

	const getBoard = () => board;

	const placeMark = (index, mark) => {
		if (board[index] !== "") return false;
		board[index] = mark;
		return true;
	};

	const reset = () => {
		for (let i = 0; i < board.length; i++) {
			board[i] = "";
		}
	};

	return { getBoard, placeMark, reset };
})();

const createPlayer = (name, mark) => {
	return { name, mark };
};

const Game = (() => {
	const WINNING_COMBOS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	let player1;
	let player2;
	let currentPlayer;
	let active = false;

	const getCurrentPlayer = () => currentPlayer;
	const isActive = () => active;

	const startGame = (name1, name2) => {
		player1 = createPlayer(name1, "X");
		player2 = createPlayer(name2, "O");
		currentPlayer = player1;
		Gameboard.reset();
		active = true;
	};

	const switchPlayer = () => {
		currentPlayer = currentPlayer === player1 ? player2 : player1;
	};

	const checkWinner = () => {
		const board = Gameboard.getBoard();
		for (const combo of WINNING_COMBOS) {
			const [a, b, c] = combo;
			if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
				return board[a];
			}
		}
		return null;
	};

	const checkTie = () => Gameboard.getBoard().every((cell) => cell !== "");

	const playRound = (index) => {
		if (!active || !Gameboard.placeMark(index, currentPlayer.mark)) return;

		if (checkWinner()) {
			active = false;
			DisplayController.endGame(`${currentPlayer.name} wins!`);
		} else if (checkTie()) {
			active = false;
			DisplayController.endGame("It's a tie!");
		} else {
			switchPlayer();
			DisplayController.renderTurn();
		}
		DisplayController.renderBoard();
	};

	return { startGame, playRound, getCurrentPlayer, isActive };
})();

const DisplayController = (() => {
	const boardElement = document.querySelector(".board");
	const statusElement = document.querySelector(".status");
	const startButton = document.querySelector(".start");
	const player1Input = document.querySelector("#player1");
	const player2Input = document.querySelector("#player2");

	const renderBoard = () => {
		boardElement.textContent = "";
		const board = Gameboard.getBoard();
		board.forEach((cell, index) => {
			const cellElement = document.createElement("div");
			cellElement.className = "cell";
			cellElement.textContent = cell;
			if (cell) {
				cellElement.classList.add(`cell-${cell.toLowerCase()}`);
			} else if (Game.isActive()) {
				cellElement.classList.add("empty");
				cellElement.classList.add(
					Game.getCurrentPlayer().mark === "X" ? "hover-x" : "hover-o"
				);
				cellElement.addEventListener("click", () => Game.playRound(index));
			}
			boardElement.append(cellElement);
		});
	};

	const renderTurn = () => {
		if (!Game.isActive()) return;
		statusElement.textContent = `${Game.getCurrentPlayer().name}'s turn`;
	};

	const endGame = (message) => {
		statusElement.textContent = message;
	};

	const startGame = () => {
		const name1 = player1Input.value.trim() || "Player 1";
		const name2 = player2Input.value.trim() || "Player 2";
		Game.startGame(name1, name2);
		renderTurn();
		renderBoard();
	};

	startButton.addEventListener("click", startGame);

	return { renderBoard, renderTurn, endGame };
})();

DisplayController.renderBoard();
