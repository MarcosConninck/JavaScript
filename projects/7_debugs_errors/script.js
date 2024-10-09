// "use strict";

// opa = "teste"; retorna erro, pois não foi declarado um let

// delete Object.prototype; não pode deletar, pois é nativo do código

// function teste() {
// 	"use strict";
// 	opa = "teste";
// }
// teste();

let a = 1;
let b = 2;
let c = 3;

if (c > a) {
	a = b;
	console.log(a); // 2
}
for (let i = 5; i > 0; i--) {
	b++;
	a = a + c + 1;
	c += 2;
	console.log(a); // 6, 12, 20, 30, 42
}
// debugger; pausa o código  para ver o valor das variáveis.
if (b == a) {
	a++;
} else {
	a = a + b + c;
}
console.log(a); // 62

a = a * b;

console.log(a); // 434

function checaNumero(num) {
	numero = Number(num);
	if (Number.isNaN(numero)) {
		alert("Escreva números! não caracteres");
	} else {
		return numero;
	}
}
// let numero = prompt("Digite um número");
// checaNumero(numero);

function saudacao(nome) {
	if (typeof nome != "string") {
		throw new Error("Seu nome tem números, cara? que isso");
	} else {
		console.log(`Olá ${nome}`);
	}
}
saudacao("marcos");
// saudacao(5);

function dividir(a, b) {
	try {
		if (b === 0) {
			throw new Error("Divisão por zero não é permitida.");
		}
		let resultado = a / b;
		console.log(`Resultado: ${resultado}`);
	} catch (e) {
		console.error(e.message);
	}
}

dividir(10, 0); // Isso lançará uma exceção e será capturado pelo bloco catch

saudacao("marcos");

try {
	let d = e + f;
} catch (error) {
	console.log("algo deu errado " + error);
} finally {
	console.log("rodou"); // executa mesmo se algo der certo ou errado
}

let arr = [1, 2, 3, 4, 5];
let arr1 = [];
function iterArray(arr) {
	if (arr.length == 0) {
		throw new Error("o array precisa ter pelo menos um elemento");
	} else {
		for (let i = 0; i < arr.length; i++) {
			console.log(arr[i]);
		}
	}
}
iterArray(arr);
iterArray(arr1); // cai no erro
