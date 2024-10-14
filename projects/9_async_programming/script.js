console.log("/////////////////////////////////////////////");
console.log("Callback");

console.log("Ainda não chamou o CALLBACK");
setTimeout(function () {
	console.log("chamou o callback");
}, 2000); // milisegundos
console.log("ainda não chamou o callback");

console.log("/////////////////////////////////////////////");
console.log("Promises");

let p = Promise.resolve(2 + 2);

console.log("...");

console.log(p);
p.then((value) => {
	return value + 5;
}).then((value) => {
	console.log(
		`antes era 2 + 2, mas no "then" anterior retornou mais 5, agora o valor é ${value}`
	);
});

console.log(p);

// Criando uma nova Promise
let minhaPromise = new Promise((resolve, reject) => {
	let sucesso = true; // Você pode mudar para false para testar o .catch

	if (sucesso) {
		resolve("A operação foi bem-sucedida!");
	} else {
		reject("Houve um erro na operação.");
	}
});
// Utilizando .then para lidar com a resolução da Promise
minhaPromise
	.then((mensagem) => {
		console.log(mensagem); // "A operação foi bem-sucedida!"
	})
	.catch((erro) => {
		console.error(erro); // "Houve um erro na operação."
	});

function verificaNumero(num) {
	return new Promise((resolve, reject) => {
		if (num == 2) {
			resolve("ok, deu true");
		} else {
			reject("o num não é 2");
		}
	});
}

console.log(verificaNumero(2));
console.log(verificaNumero(3));

console.log("/////////////////////////////////////////////");
console.log("várias promises: ");

const p1 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve(100);
	}, 5000); // 5 seg
});

const p2 = Promise.resolve(5);

const p3 = new Promise(function (resolve, reject) {
	resolve(10);
});
Promise.all([p1, p2, p3]).then((values) => console.log(values));

async function soma(a, b) {
	return a + b;
}
soma(2, 2).then((value) => console.log("async func result: " + value));
console.log(soma(2, 4));

console.log("/////////////////////////////////////////////");
console.log("Await");

function somaComDelay(a, b) {
	return new Promise((resolve) => {
		setTimeout(function () {
			resolve(a + b);
		}, 4000);
	});
}

async function resSoma(a, b, c) {
	let x = somaComDelay(a, b);
	let y = c;

	return (await x) + y; // await para aguardar a resolução da função somaComDelay
}
resSoma(1, 2, 3).then((value) => console.log("soma com delay: " + value));

console.log("/////////////////////////////////////////////");
console.log("Generators");

function* genTest() {
	let id = 0;
	while (true) {
		yield id++;
	}
}
let criarId = genTest();
console.log(criarId.next().value); // 0
console.log(criarId.next().value); // 1
console.log(criarId.next().value); // 2
console.log(criarId.next().value); // 3
