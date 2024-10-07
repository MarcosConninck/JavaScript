const cachorro = {
	raca: "srd",
	latir: function () {
		console.log("au au");
	},
	uivar: function () {
		console.log("auuuuu");
	},
	setRaca: function (raca) {
		this.raca = raca; // this referencia ao proprio objeto
	},
	getRaca: function () {
		return "A raça é " + this.raca;
	},
};
cachorro.latir();
cachorro.uivar();
cachorro.setRaca("Pastor");
console.log(cachorro.raca);
console.log(cachorro.getRaca());

///////////////////////////////////////////////////

const pessoa = {
	maos: 2,
};
console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) === Object.prototype);
console.log(pessoa.hasOwnProperty("maos"));

let novaPessoa = Object.create(pessoa);
console.log(novaPessoa.maos); // 2, pois herdou do prototype "pessoa"

console.log(novaPessoa.hasOwnProperty("maos")); // false, ele pega do prototype
console.log(Object.getPrototypeOf(novaPessoa) === pessoa); // true

///////////////////////////////////////////////////

//molde
const carro = {
	marca: "sem marca",
	rodas: 4,
	acelerar: function () {
		console.log("vruuuumm");
	},
};
let gol = Object.create(carro);
gol.marca = "vw";
console.log(gol.marca);
gol.acelerar();

let ka = Object.create(carro);
ka.marca = "ford";
console.log(ka.marca);
ka.acelerar();
///////////////////////////////////////////////////

// construtor
function criaCarro(marca, cor) {
	let carro = Object.create({});
	carro.marca = marca;
	carro.cor = cor;
	return carro;
}
let fusca = criaCarro("volks", "branco");
console.log(fusca.marca);
console.log(fusca.cor);

///////////////////////////////////////////////////

function Cachorro(raca, cor) {
	this.raca = raca;
	this.cor = cor;
	this.uivar = function () {
		console.log("auuu");
	};
}
Cachorro.prototype.latir = function () {
	// adicionando métodos ao prototype
	console.log("au");
};
let husky = new Cachorro("Husky", "preto");
husky.uivar();
husky.latir();

///////////////////////////////////////////////////

class Celular {
	constructor(marca, modelo) {
		this.marca = marca;
		this.modelo = modelo;
		// this.bateria = 1;
	}
	ligar(botao) {
		if (botao) {
			console.log("ligado");
		} else {
			console.log("desligado");
		}
	}
}
Celular.prototype.bateria = 1;
let tela = Symbol();
Celular.prototype[tela] = true;

let moto = new Celular("motorola", "S85");
console.log(moto);
console.log(moto[tela]);
///////////////////////////////////////////////////

class Cachorro1 {
	constructor(raca, cor) {
		this.raca = raca;
		this.cor = cor;
	}
	latir() {
		console.log("au au au");
	}
	get getCor() {
		return this.cor;
	}
	set setCor(cor) {
		this.cor = cor;
	}
}
let labrador = new Cachorro1("labrador", "sem cor");
console.log(labrador);
labrador.setCor = "caramelo";
console.log(labrador.getCor);

///////////////////////////////////////////////////
// HERANÇA
class Mamifero {
	constructor(patas) {
		this.patas = patas;
	}
}

class Cachorro2 extends Mamifero {
	constructor(patas, raca) {
		super(patas, patas);
		this.raca = raca;
	}
	latir() {
		console.log("au au");
	}
}
let pug = new Cachorro2(4, "pug");
console.log(pug);
console.log(pug instanceof Mamifero);
