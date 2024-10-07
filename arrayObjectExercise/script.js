let arrr = [1, 2, 3, 4, 5];
console.log(arrr[0]);
console.log(arrr[2]);
console.log(arrr[3]);

let arr1 = [1, 2];
let arr2 = [1, 2, 3, 4];

console.log(arr1.length);
console.log(arr2.length);

let onibus = {
	rodas: 8,
	limitePassageiros: 40,
	portas: 2,
};
console.log(onibus);
onibus.janelas = 20;
delete onibus.rodas;
console.log(onibus.janelas);

let arr3 = ["angelica", "marcos", "vinicius", "fabiano", "roberto"];
if (arr3.includes("marcos")) {
	console.log("sim, existe este nome no array");
}

let words = ["casa", "carro", "bicicleta", "avião"];
let capitalizedWords = words.map(function (word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
});
console.log(capitalizedWords);

let numbers = [1, 2, 3, 4, 5];
let doubledAndSummed = numbers
	.map(function (num) {
		return num * 2;
	})
	.reduce(function (acc, curr) {
		return acc + curr;
	}, 0);
console.log(doubledAndSummed);

let arr4 = [1, 2, 3, 4, 5];
let arr5 = [7, 8, 9, 10];

function countElements(arr) {
	if (arr.length < 5) {
		return console.log("Poucos elementos");
	} else {
		return console.log("Muitos elementos");
	}
}
countElements(arr4);
countElements(arr5);

let arr6 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr6.length; i++) {
	console.log(arr6[i]);
}

let jasonJSON = {
	nome: "marcos",
	idade: "30",
	motociclista: true,
};
jasonJSON.sexo = "masculino";
console.log(jasonJSON);

let frase = "parabens você acaba de adquirir uma nova certificação!";
let fraseSeparada = frase.split(" ");
for (let i = 0; i < fraseSeparada.length; i++) {
	console.log(fraseSeparada[i]);
}

const calculadora = {
	soma: function (a, b) {
		return a + b;
	},
	subtrair: function (a, b) {
		return a - b;
	},
	multiplicar: function (a, b) {
		return a * b;
	},
	dividir: function (a, b) {
		return a / b;
	},
};
console.log(calculadora.soma(2, 4));
console.log(calculadora.subtrair(2, 4));
console.log(calculadora.multiplicar(2, 4));
console.log(calculadora.dividir(2, 4));

// const arr = [1, 2, 3, 4];
// let qty = arr.length;
// let el = arr[2];

// const arr = [];
// for (let i = 0; i < 5; i++) {
// 	arr.push(i + 5);
// }
let arr = [1, 2, 3, 4, 5, 7, 6];
function findMaxNumber(arr) {
	let max = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}
console.log(findMaxNumber(arr));

// Meu código
let newArr = [1, 1, 2, 3, 3, 4];
console.log(newArr);

function sumUniqueNumbers(arr) {
	let sum = 0;
	let newArr2 = [];
	for (let i = 0; i < arr.length; i++) {
		if (!newArr2.includes(arr[i])) {
			newArr2.push(arr[i]);
			sum += arr[i];
		}
	}
	console.log(newArr2);
	return sum;
}

console.log(sumUniqueNumbers(newArr));
////////////////////////////////////////////////////////////

// código do curso
function sumUniqueNumbers(array) {
	const numArmazenados = [];
	const numRepetidos = [];

	for (let i = 0; i < array.length; i++) {
		if (!numArmazenados.includes(array[i])) {
			numArmazenados.push(array[i]);
		} else {
			numRepetidos.push(array[i]);
		}
	}

	const numerosUnicos = numArmazenados.filter(
		(num) => !numRepetidos.includes(num)
	);

	const valorTotal = numerosUnicos.reduce(
		(total, numero) => total + numero,
		0
	);

	return valorTotal;
}

const numbers2 = [1, 1, 2, 3, 3, 4];

console.log(sumUniqueNumbers(numbers2));
////////////////////////////////////////////////////////////

let arr8 = [1, 1, 2, 3, 3, 4];
console.log(arr8);

function removeDuplicates(arr) {
	let newArr2 = [];
	for (let i = 0; i < arr.length; i++) {
		if (!newArr2.includes(arr[i])) {
			newArr2.push(arr[i]);
		}
	}
	return newArr2;
}

console.log(removeDuplicates(arr8));
