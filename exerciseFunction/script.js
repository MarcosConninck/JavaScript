function helloWord() {
	console.log("Hello World");
}
helloWord();

function dizIdade(idade) {
	console.log(`Ok, sua idade é ${idade}`);
}
dizIdade(15);

function sumTwoNumbers(a, b) {
	return a + b;
}
console.log(sumTwoNumbers(3, 5));
console.log(sumTwoNumbers(2, -2));

function returnRandomNumber(maxNumber) {
	let x = Math.random() * maxNumber;
	return Math.round(x);
}
console.log(returnRandomNumber(10));

function underAgeDetect(age) {
	if (age >= 18) {
		console.log("Ok, passed");
	} else {
		console.log("Not Allowed!");
	}
}
underAgeDetect(15);
underAgeDetect(21);

function detectDataType(n) {
	if (typeof n === "number") {
		console.log(`${n} it's a number`);
	} else if (typeof n === "boolean") {
		console.log(`${n} it's a boolean`);
	} else if (typeof n === "string") {
		console.log(`${n} it's a string`);
	} else {
		return console.log(`${n} Not allowed data type`);
	}
}
detectDataType(1231273);
detectDataType(14 > 5);
detectDataType("Marcos");

function opositeNumber() {
	x = Number(prompt("type a negative number: "));
	oposite = Math.abs(x);
	return oposite;
}
// console.log(opositeNumber());

function lengthOfString(text) {
	if (text.length > 10) {
		console.log("Text is too big (greater than 10 chars)");
	} else {
		console.log("Text accepted");
	}
}

lengthOfString("Meu nome é marcos e estou estudando");
lengthOfString("Olá Mundo");

function pow(a, b) {
	// return Math.pow(a, b);
	return a ** b;
}
console.log(pow(4, 9));
console.log(pow(2, 3));

function printEven(x) {
	while (x >= 0) {
		if (x % 2 == 0 && x !== 0) {
			console.log(x);
			x--;
		} else if (x % 2 != 0) {
			x--;
		} else if (x === 0) {
			console.log(0);
			break;
		} else {
			break;
		}
	}
}

printEven(5);

let resultado = function soma(a, b, c) {
	return a + b + c;
};
console.log(resultado(5, 10, 15));

function faixaEtaria(idade) {
	if (idade < 12) {
		return "Criança";
	} else if (12 <= idade && idade <= 24) {
		return "Jovem";
	} else if (idade > 25) {
		return "Adulto";
	}
}
let crianca = faixaEtaria(8);
let adulto = faixaEtaria(30);

function isPalindrome(word) {
	reverse = word.split("").reverse().join("");
	if (reverse == word) {
		return true;
	} else {
		return false;
	}
}
isPalindrome("Marcos");

function calculateAverage(array) {
	let sum = 0;
	let average = array.length;

	if (array.length === 0) {
		return 0;
	} else {
		for (let n = 0; n < array.length; n++) {
			sum += array[n];
		}
		return sum / average;
	}
}
console.log(calculateAverage([0, 1, 2, 3, 4]));

function reverseString(str) {
	return str.split("").reverse().join("");
}
console.log(reverseString("marcos"));

function countVowels(str) {
	const vowels = "aeiouAEIOU";
	let counter = 0;

	for (let char of str) {
		if (vowels.includes(char)) {
			counter++;
		}
	}
	return counter;
}

console.log(countVowels("marcos"));

let array = [1, 2, 3, 4];

function sumEvenNumbers(array) {
	let soma = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 === 0) {
			soma += array[i];
		}
	}
	return soma;
}
console.log(sumEvenNumbers(array));
