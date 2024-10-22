let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#btn-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer; // para selecionar entre o jogador físico e o pc

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
			} else {
				player2++;
			}
		}

		console.log("click no box" + boxes[i].id);
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
