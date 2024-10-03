arr = [1, 2, 3, 4, 5];
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[3]);

arr1 = [1, 2];
arr2 = [1, 2, 3, 4];

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

arr3 = ["angelica", "marcos", "vinicius", "fabiano", "roberto"];
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
