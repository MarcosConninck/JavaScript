// variáveis
let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#btn-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer; // para selecionar entre o jogador físico e o pc
let mainContainer = document.querySelector("#main-container");
let btn2players = document.querySelector("#btn-container #two-players");
let btnIAplayer = document.querySelector("#IA-player");

// contador de jogadas
let player1 = 0;
let player2 = 0;

// adicionando listener aos boxs
for (let i = 0; i < boxes.length; i++) {
	boxes[i].addEventListener("click", () => {
		let el = identifyPlayer(player1, player2);
		// verifica se já está preenchido e não deixa por outro

		if (boxes[i].childNodes.length == 0) {
			let cloneEl = el.cloneNode(true);
			boxes[i].appendChild(cloneEl);

			// computar jogada
			if (player1 == player2) {
				player1++;

				if (secondPlayer == "IA-player") {
					// função para executar a jogada
					computerPlay();
					player2++;
				}
			} else {
				player2++;
			}
		}

		// verifica quem ganhou
		checkWinCondition();
	});
}

// identifica jogador
function identifyPlayer(player1, player2) {
	if (player1 == player2) {
		return x;
	} else {
		return o;
	}
}

// 8 possibilidades de vitória
function checkWinCondition() {
	let b1 = document.getElementById("box-1");
	let b2 = document.getElementById("box-2");
	let b3 = document.getElementById("box-3");
	let b4 = document.getElementById("box-4");
	let b5 = document.getElementById("box-5");
	let b6 = document.getElementById("box-6");
	let b7 = document.getElementById("box-7");
	let b8 = document.getElementById("box-8");
	let b9 = document.getElementById("box-9");

	// 8 condições de vitória e 1 de velha
	if (
		b1.childNodes.length > 0 &&
		b2.childNodes.length > 0 &&
		b3.childNodes.length > 0
	) {
		let b1Child = b1.childNodes[0].className;
		let b2Child = b2.childNodes[0].className;
		let b3Child = b3.childNodes[0].className;
		if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
			declareWinner("x");
		} else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
			declareWinner("y");
		}
	}
	if (
		b4.childNodes.length > 0 &&
		b5.childNodes.length > 0 &&
		b6.childNodes.length > 0
	) {
		let b4Child = b4.childNodes[0].className;
		let b5Child = b5.childNodes[0].className;
		let b6Child = b6.childNodes[0].className;
		if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
			declareWinner("x");
		} else if (b4Child == "o" && b5Child == "o" && b6Child == "o") {
			declareWinner("y");
		}
	}

	if (
		b7.childNodes.length > 0 &&
		b8.childNodes.length > 0 &&
		b9.childNodes.length > 0
	) {
		let b7Child = b7.childNodes[0].className;
		let b8Child = b8.childNodes[0].className;
		let b9Child = b9.childNodes[0].className;
		if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
			declareWinner("x");
		} else if (b7Child == "o" && b8Child == "o" && b9Child == "o") {
			declareWinner("y");
		}
	}
	if (
		b1.childNodes.length > 0 &&
		b5.childNodes.length > 0 &&
		b9.childNodes.length > 0
	) {
		let b1Child = b1.childNodes[0].className;
		let b5Child = b5.childNodes[0].className;
		let b9Child = b9.childNodes[0].className;
		if (b1Child == "x" && b5Child == "x" && b9Child == "x") {
			declareWinner("x");
		} else if (b1Child == "o" && b5Child == "o" && b9Child == "o") {
			declareWinner("y");
		}
	}
	if (
		b3.childNodes.length > 0 &&
		b5.childNodes.length > 0 &&
		b7.childNodes.length > 0
	) {
		let b3Child = b3.childNodes[0].className;
		let b5Child = b5.childNodes[0].className;
		let b7Child = b7.childNodes[0].className;
		if (b3Child == "x" && b5Child == "x" && b7Child == "x") {
			declareWinner("x");
		} else if (b3Child == "o" && b5Child == "o" && b7Child == "o") {
			declareWinner("y");
		}
	}
	if (
		b1.childNodes.length > 0 &&
		b4.childNodes.length > 0 &&
		b7.childNodes.length > 0
	) {
		let b1Child = b1.childNodes[0].className;
		let b4Child = b4.childNodes[0].className;
		let b7Child = b7.childNodes[0].className;
		if (b1Child == "x" && b4Child == "x" && b7Child == "x") {
			declareWinner("x");
		} else if (b1Child == "o" && b4Child == "o" && b7Child == "o") {
			declareWinner("y");
		}
	}
	if (
		b2.childNodes.length > 0 &&
		b5.childNodes.length > 0 &&
		b8.childNodes.length > 0
	) {
		let b2Child = b2.childNodes[0].className;
		let b5Child = b5.childNodes[0].className;
		let b8Child = b8.childNodes[0].className;
		if (b2Child == "x" && b5Child == "x" && b8Child == "x") {
			declareWinner("x");
		} else if (b2Child == "o" && b5Child == "o" && b8Child == "o") {
			declareWinner("y");
		}
	}
	if (
		b3.childNodes.length > 0 &&
		b6.childNodes.length > 0 &&
		b9.childNodes.length > 0
	) {
		let b3Child = b3.childNodes[0].className;
		let b6Child = b6.childNodes[0].className;
		let b9Child = b9.childNodes[0].className;
		if (b3Child == "x" && b6Child == "x" && b9Child == "x") {
			declareWinner("x");
		} else if (b3Child == "o" && b6Child == "o" && b9Child == "o") {
			declareWinner("y");
		}
	}
	// para dar velha ... todos elementos do box preenchidos
	let counter = 0;
	for (let i = 0; i < boxes.length; i++) {
		if (boxes[i].childNodes[0] != undefined) {
			counter++;
		}
		if (counter == 9) {
			declareWinner("Deu velha!");
		}
	}
}

// limpa o jogo, declara vencedor e atualiza o placar
function declareWinner(winner) {
	let scoreBoardX = document.querySelector("#scoreboard-1");
	let scoreBoardY = document.querySelector("#scoreboard-2");

	if (winner == "x") {
		scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1;
		msg = "O jogador 1 venceu";
	} else if (winner == "y") {
		scoreBoardY.textContent = parseInt(scoreBoardY.textContent) + 1;
		msg = "O jogador 2 venceu";
	} else {
		msg = "Deu velha!";
	}
	// exibir mensagem
	messageText.innerHTML = msg;
	messageContainer.classList.remove("hide");

	// esconde mensagem
	setTimeout(() => {
		messageContainer.classList.add("hide");
	}, 3000);

	// zera jogadas
	player1 = 0;
	player2 = 0;

	// identificar e remover X e O
	let boxesToRemove = document.querySelectorAll(".box div");
	for (let i = 0; i < boxesToRemove.length; i++) {
		boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
	}
}

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function () {
		secondPlayer = this.getAttribute("id");
		console.log(secondPlayer);

		for (let j = 0; j < buttons.length; j++) {
			buttons[j].style.display = "none";
		}

		setTimeout(() => {
			mainContainer.classList.remove("hide");
		}, 500);
	});
}

// logica jogada pc
function computerPlay() {
	// seleciona box aleatório:
	let cloneO = o.cloneNode(true);
	counter = 0;
	filled = 0;

	for (let i = 0; i < boxes.length; i++) {
		let randomNumber = Math.floor(Math.random() * 5);

		// só preenche se estiver vazio o child
		if (boxes[i].childNodes[0] == undefined) {
			if (randomNumber <= 1) {
				boxes[i].appendChild(cloneO);
				counter++;
				break;
			}
			// checa quantas estão preenchidas
		} else {
			filled++;
		}
	}
	if (counter == 0 && filled < 9) {
		computerPlay();
	}
}

// btn2players.addEventListener("click", () => {
// 	console.log("2 jogadores");
// 	mainContainer.classList.remove("hide");
// 	btn2players.classList.add("hide");
// 	btnIAplayer.classList.add("hide");
// });
// btnIAplayer.addEventListener("click", () => {
// 	console.log("Contra IA");
// 	mainContainer.classList.remove("hide");
// 	btn2players.classList.add("hide");
// 	btnIAplayer.classList.add("hide");
// });
