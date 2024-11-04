// arrow funcion

const escreveNome = () => {
	const i = "marcos";
	console.log(i);
};
escreveNome();

const somaArrow = (a, b) => a + b;

console.log(somaArrow(2, 4));

const testArrow = () => console.log("testou");
testArrow();

const user = {
	name: "Marcos",
	sayUsernameArrow() {
		setTimeout(() => {
			console.log(this.name);
		}, 700);
	},
};
user.sayUsernameArrow();

// filter
const arr = [1, 2, 3, 4, 5];
const filteredArr = arr.filter((n) => {
	if (n >= 3) {
		return n;
	}
});

console.log(filteredArr);

const users = [
	{ name: "marcos", avaible: true },
	{ name: "vinicius", avaible: false },
	{ name: "jorge", avaible: false },
	{ name: "silva", avaible: true },
];
const avaibleUsers = users.filter((user) => user.avaible);
const unavaibleUsers = users.filter((user) => !user.avaible);
console.log(avaibleUsers);
console.log(unavaibleUsers);

// map
const products = [
	{ name: "camisa", price: 20.0, category: "roupas" },
	{ name: "chaleira eletrica", price: 53.0, category: "eletro" },
	{ name: "fogao", price: 400, category: "eletro" },
	{ name: "calça", price: 40.0, category: "roupas" },
];

products.map((product) => {
	if (product.category == "roupas") {
		product.onSale = true; // modifica o item  conforme especificação
	}
});

console.log(products);

// destructing
const fruits = ["aple", "orange", "strawberry"];
const [f1, f2, f3] = fruits;
console.log(f1);
console.log(f2);

let Pessoa = {
	nome: "marcos",
	idade: 30,
	profissao: "programador",
};
console.log(Pessoa);

const { nome: primeiroNome, idade: yearsOld, profissao: oQueFaz } = Pessoa;
console.log(
	`Pessoa: ${primeiroNome}, com idade de ${yearsOld}, trabalha com ${oQueFaz}`
);

// spread operator

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];
console.log(a3); // 1,2,3,4,5,6

// classes
class Carro {
	constructor(modelo, marca, preco) {
		(this.modelo = modelo), (this.marca = marca), (this.preco = preco);
	}
	carWithDiscount(discount) {
		return this.preco * ((100 - discount) / 100);
	}
}

const gol = new Carro("gol", "vw", 15000);
const voyage = new Carro("voyage", "vw", 20000);
console.log(gol.modelo);
console.log(gol.preco);

console.log(gol.carWithDiscount(10));
console.log(voyage.carWithDiscount(50));

// herança
class Camionete extends Carro {
	constructor(modelo, marca, preco, peso) {
		super(modelo, marca, preco);
		this.peso = peso;
	}
	showPeso() {
		console.log(
			`Essa camionete modelo ${this.modelo}/${this.marca} tem o peso de ${this.peso} e custa ${this.preco}`
		);
	}
}
const ranger = new Camionete("ranger", "ford", 30000, 2000);
ranger.showPeso();
