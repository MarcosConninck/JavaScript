let arr = [1, 2, 3, 4];
let names = ["marcos", "Vinicius", "Zé"];
let bool = [true, false, true];
let various = [1, "marcos", true];

console.log(various);
console.log(various[1]);
console.log(names[names.length - 1]);

///////////////////////////////////////////////////

let numbers = [1, 3, 5, 6];
console.log(numbers.length);
console.log(numbers["length"]);

//////////////////////////////////////////////////

let marca = "Harley Davidson";
console.log(marca.toUpperCase());
console.log(typeof marca.toUpperCase());

//////////////////////////////////////////////////

let pessoa = {
	nome: "Marcos",
	profissao: "Programador",
	idade: 30,
	correr: function () {
		console.log("correndo");
	},
};

console.log(pessoa);
console.log(pessoa.profissao);
pessoa.correr();

let carro = {
	marca: "VW",
	portas: 4,
	eletrico: false,
	motor: 1.6,
};
console.log(carro.portas);
delete carro.portas; // excluindo propriedade
console.log(carro.portas);
carro.tetoSolar = true; // adicionando propriedade
console.log(carro.tetoSolar);

//////////////////////////////////////////////////

let objectA = {
	prop1: 1,
	prop2: 2,
};
let objectB = {
	prop3: 3,
};
Object.assign(objectA, objectB);
console.log(objectA);

//////////////////////////////////////////////////

let objA = {
	points: 10,
};
let objB = objA; // se modificar 1, o outro muda também
let objC = {
	points: 10,
};
console.log(objB);
console.log(objA == objB); //true
console.log(objA == objC); //false

//////////////////////////////////////////////////

let numeros = [1, 5, 10, 15, 20, 25];

for (let i = 0; i < numeros.length; i++) {
	console.log(numeros[i]);
}
//////////////////////////////////////////////////
let pessoas = ["eu", "voce", "ninguem"];
let elementoRemovido = pessoas.pop();
console.log(elementoRemovido);
console.log(pessoas);
pessoas.push("e mais ninguem");
console.log(pessoas);

console.log(pessoas.indexOf("voce"));

pessoas.forEach((pessoa) => {
	console.log("saudação " + pessoa);
});

//////////////////////////////////////////////////

let vowel = "aeiou";
console.log(vowel.includes("a"));
//////////////////////////////////////////////////

console.log(vowel.split("").reverse().join(""));

//////////////////////////////////////////////////

let sku = "34";

console.log(sku.padStart(6, 0));

//////////////////////////////////////////////////

let frase = "meu nome é marcos";
arrFrase = frase.split(" ");
console.log(arrFrase);

//////////////////////////////////////////////////

joinFrase = arrFrase.join("-");
console.log(joinFrase);

//////////////////////////////////////////////////

console.log("teste".repeat(3)); // testetesteteste

//////////////////////////////////////////////////
let num = 1;
let num1 = 2;
let num2 = 5;
let num3 = 4;

function imprimeNumeros(...args) {
	for (let i = 0; i < args.length; i++) {
		console.log(args[i]);
	}
}
imprimeNumeros(num, num1, num2, num3);
//////////////////////////////////////////////////
let obj = {
	rodas: 4,
	portas: 4,
	teto: true,
	motor: 2.0,
};
const { rodas: vRodas, portas: vPortas, teto: vTeto } = obj;
console.log(vRodas, vPortas);
//////////////////////////////////////////////////
let outrosNomes = ["rafa", "zé", "marcos"];
let [nome1, nome2, nome3] = outrosNomes;
console.log(nome1);
console.log(nome3);

// JSON:
let eu = {
	"nome": "Marcos",
	"idade": 30,
    "profissao": "programador",
    "hobbies": ["andar de moto", "correr", "estudar"]
};

let euString = JSON.stringify(eu);
console.log(euString);

let euJSON = JSON.parse(euString);
console.log(euJSON);

console.log(euJSON.hobbies[0]);

