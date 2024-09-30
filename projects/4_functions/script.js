function printOnConsole() {
	console.log("Hello World!");
}
printOnConsole();

function printNumber(num) {
	console.log(`The number is ${num}`);
}
printNumber(2);
printNumber(4);
printNumber(-10);

const randomNumber = function () {
	console.log(Math.random());
};
randomNumber();

const saudacao = function (nome) {
	if (nome == "Marcos") {
		return `Olá, ${nome}`;
	}
};

console.log(saudacao("Marcos"));

// escopo da função
let n = 10;
const numero = function () {
	let n = 25;
	console.log(n);
};
numero();
console.log(n);

// escopo IF
let x = 10;
if (true) {
	let x = 20;
	console.log(x);
}
console.log(x);

const consoleTest = () => {
	console.log("Hello Arrow Function");
};
consoleTest();

let soma = (a, b) => {
	return a + b;
};
console.log(soma(2, 10));

const multiplicarPorDois = (x) => x * 2;
// or
const multiPorDois = (x) => {
	return x * 2;
};
console.log(multiplicarPorDois(15));
console.log(multiPorDois(13));

function nomeComIdade(nome, idade) {
	if (idade === undefined) {
		console.log("Seu nome é " + nome);
	} else {
		console.log(`Seu nome é ${nome} e vc tem ${idade} anos.`);
	}
}
nomeComIdade("marcos");
nomeComIdade("marcos", 33);

function potencia(base, expoente = 2) {
	return Math.pow(base, expoente);
}

console.log(potencia(4));
console.log(potencia(4, 4));

function lembrarSoma(x) {
	return function (y) {
		return x + y;
	};
}
let soma1 = lembrarSoma(2);
console.log(soma1(5));

function returnHigherPairNumber(n) {
	if (n > 0) {
		if (n % 2 == 0) {
			console.log("n é PAR " + n);
		} else {
			console.log("n é IMPAR " + n);
			returnHigherPairNumber(n - 1);
		}
	}
}
returnHigherPairNumber(500);
