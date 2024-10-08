class Conta {
	constructor(saldo) {
		this.saldo = saldo;
	}
	depositar(value) {
		this.saldo += value;
		console.log(
			"depositando..." +
				value +
				"R$ seu saldo agora é: " +
				this.saldo +
				"R$"
		);
	}
	sacar(value) {
		this.saldo -= value;
		console.log(
			"Sacando..." + value + "R$ seu saldo agora é: " + this.saldo + "R$"
		);
	}
}

let conta1 = new Conta(500);
conta1.depositar(100);
conta1.sacar(500);

//////////////////////////////////////////////////////////////////////////////////////////

class Carrinho {
	constructor(itens, qtd, valorTotal) {
		this.itens = itens;
		this.qtd = qtd;
		this.valorTotal = valorTotal;
	}
	addItem(item) {
		let contador = 0;
		for (let itemCarrinho in this.item) {
			if (this.item[itemCarrinho].id == item.id) {
				this.item[itemCarrinho].qtd += item.qtd;
				contador = 1;
			}
		}
		if (contador == 0) {
			this.itens.push(item);
		}
		this.qtd += item.qtd;
		this.valorTotal += item.preco * item.qtd;
	}
	removeItem(item) {
		for (let itemCarrinho in this.itens) {
			if (this.itens[itemCarrinho].id == item.id) {
				let obj = this.itens[itemCarrinho];
				let index = this.itens.findIndex(function (obj) {
					return obj.id == item.id;
				});

				this.qtd -= this.itens[itemCarrinho].qtd;
				this.valorTotal -=
					this.itens[itemCarrinho].preco *
					this.itens[itemCarrinho].qtd;

				this.itens.splice(index, 1);
			}
		}
	}
}

let meuCarrinho = new Carrinho(
	[
		{
			id: 1,
			nome: "Camisa",
			qtd: 1,
			preco: 20,
		},
		{
			id: 2,
			nome: "Calça",
			qtd: 2,
			preco: 50,
		},
	],
	3,
	120
);

console.log(meuCarrinho);
// meuCarrinho.add("cerveja");
meuCarrinho.addItem({ id: 1, nome: "Camisa", qtd: 2, preco: 20 });
console.log(meuCarrinho);
meuCarrinho.addItem({ id: 3, nome: "Cerveja", qtd: 4, preco: 3.5 });
console.log(meuCarrinho);
meuCarrinho.removeItem({ id: 1, nome: "Camisa", qtd: 2, preco: 20 });
console.log(meuCarrinho);

// meuCarrinho.add("chocolate");
// meuCarrinho.add("chocolate", 2.5, 3);
// console.log(meuCarrinho);

//////////////////////////////////////////////////////////////////////////////////////////

class Endereco {
	constructor(rua, bairro, cidade, estado) {
		this.rua = rua;
		this.bairro = bairro;
		this.cidade = cidade;
		this.estado = estado;
	}
	get getEnderecoCompleto() {
		console.log(
			`Rua: ${this.rua}, bairro: ${this.bairro}, cidade: ${this.cidade}/${this.estado}`
		);
	}
	set setRua(rua) {
		this.rua = rua;
	}
	set setBairro(bairro) {
		this.bairro = bairro;
	}
	set setCidade(cidade) {
		this.cidade = cidade;
	}
	set setEstado(estado) {
		this.estado = estado;
	}
}
let meuEndereco = new Endereco("Rebouças, 150", "Arco-iris", "Londrina", "PR");
meuEndereco.getEnderecoCompleto;
meuEndereco.setRua = "Jorge Casoni";
meuEndereco.setCidade = "Cambé";
meuEndereco.getEnderecoCompleto;

//////////////////////////////////////////////////////////////////////////////////////////

class Carro {
	constructor(marca, cor, gasolinaRestante, consumo) {
		this.marca = marca;
		this.cor = cor;
		this.gasolinaRestante = gasolinaRestante;
		this.consumo = consumo;
	}
	dirigir(km) {
		let litrosConsumidos = km / this.consumo;
		let distanciaPercorrida = this.gasolinaRestante * this.consumo;

		if (this.gasolinaRestante - litrosConsumidos <= 0) {
			console.log(
				"Acabou a gasolina! andamos " + distanciaPercorrida + "km"
			);
		} else {
			console.log(
				"Dirigindo, tudo ok. Ainda temos: " +
					(this.gasolinaRestante - litrosConsumidos).toFixed(2) +
					"L"
			);
			this.gasolinaRestante -= litrosConsumidos;
		}
	}
	abastecer(litrosAbastecimento) {
		if (this.gasolinaRestante + litrosAbastecimento >= 50) {
			console.log("O tanque enche com 50L, você tentou colocar a mais");
		} else {
			console.log(
				`Abastecendo com ${litrosAbastecimento}L... agora temos: ${(this.gasolinaRestante +=
					litrosAbastecimento).toFixed(2)}`
			);
			this.gasolinaRestante += litrosAbastecimento;
		}
	}
}

let gol = new Carro("VW", "vermelho", 30, 10);
console.log(gol);
gol.dirigir(269);
gol.abastecer(10);

//////////////////////////////////////////////////////////////////////////////////////////

class ContaBancaria1 {
	constructor(saldoCC, saldoCP, jurosCP) {
		this.saldoCC = saldoCC;
		this.saldoCP = saldoCP;
		this.jurosCP = jurosCP;
	}
	verificaSaldo(conta) {
		if (conta == "saldoCC") {
			return this.saldoCC;
		} else if (conta == "saldoCP") {
			return this.saldoCP;
		}
	}
	deposito(valor, conta) {
		if (conta == "saldoCC") {
			this.saldoCC += valor;
			console.log(
				`Depositado ${valor} na Corrente... Saldo atual: ${this.verificaSaldo(
					"saldoCC"
				)}`
			);
			return;
		} else if (conta == "saldoCP") {
			this.saldoCP += valor;
			console.log(
				`Depositado ${valor} na Poupança... Saldo atual: ${this.verificaSaldo(
					"saldoCP"
				)}`
			);
			return;
		} else {
			console.log("valor ou conta incorreta");
		}
	}
	saque(valor, conta) {
		if (conta == "saldoCC") {
			this.saldoCC -= valor;
			console.log(
				`Sacando ${valor} da Corrente... Saldo atual ${this.verificaSaldo(
					"saldoCC"
				)}`
			);
			return;
		} else if (conta == "saldoCP") {
			this.saldoCP -= valor;
			console.log(
				`Sacando ${valor} da Poupança... Saldo atual: ${this.verificaSaldo(
					"saldoCP"
				)}`
			);
			return;
		} else {
			console.log("valor ou conta incorreta");
		}
	}
	transferirCPCC(valor) {
		if (valor > this.saldoCP) {
			console.log("saldo insuficiente para transferir");
		} else {
			console.log(
				`Transferindo ${valor} da Poupança e enviando pra corrente.`
			);
			this.saldoCP -= valor;
			this.saldoCC += valor;
			console.log(`Saldo CC: ${this.saldoCC}, Saldo CP: ${this.saldoCP}`);
		}
	}
	rendimentoPoupanca(meses) {
		let total = this.saldoCP * (1 + this.jurosCP / 100) ** meses;
		let rendimento = total - this.saldoCP;
		this.saldoCP = rendimento;
		console.log(
			`sua conta rendeu ${rendimento.toFixed(
				2
			)}$, saldo Poupança ${total.toFixed(2)}`
		);
	}
}

class ContaHerdada extends ContaBancaria1 {
	constructor(saldoCC, saldoCP, jurosCP) {
		super(saldoCC, saldoCP, jurosCP * 2);
	}
}

let minhaConta = new ContaBancaria1(1000, 100, 0.5);
let outraConta = new ContaBancaria1(0, 0, 0);
minhaConta.deposito(100, "saldoCC");
minhaConta.deposito(100, "saldoCP");
minhaConta.rendimentoPoupanca(6);
minhaConta.saque(230, "saldoCC");
minhaConta.transferirCPCC(200);
let contaHerdada = new ContaHerdada(5000, 3000, 0.5);
console.log(contaHerdada);
contaHerdada.rendimentoPoupanca(6);

//////////////////////////////////////////////////////////////////////////////////////////
// Contador de palavras na frase
class WordCounter {
	constructor() {}
	countWords(str) {
		if (str.length === 0) {
			return 0;
		}
		let counter = 0;
		let newStr = str.split(" ");
		for (let i = 0; i < newStr.length; i++) {
			counter++;
		}
		return counter;
	}
}

let contador = new WordCounter();
let frase = "meu nome é marcos vinicius e eu gosto de correr";
let frase1 = "olá";
let frase2 = "";
console.log(contador.countWords(frase));
console.log(contador.countWords(frase1));
console.log(contador.countWords(frase2));

//////////////////////////////////////////////////////////////////////////////////////////

class Retangulo {
	constructor(largura, altura) {
		if (largura <= 0 || altura <= 0) {
			throw new Error("Largura e altura devem ser maiores que 0");
		}
		this.largura = largura;
		this.altura = altura;
	}
	calcularArea() {
		return this.largura * this.altura;
	}
	calcularPerimetro() {
		return (this.largura + this.altura) * 2;
	}
}
let meuRetangulo = new Retangulo(10, 5);
console.log(meuRetangulo.calcularArea());
console.log(meuRetangulo.calcularPerimetro());

//////////////////////////////////////////////////////////////////////////////////////////

class Voo {
	constructor(codigoVoo, origem, destino, assentosDisponiveis) {
		this.codigoVoo = codigoVoo;
		this.origem = origem;
		this.destino = destino;
		this.assentosDisponiveis = assentosDisponiveis;
	}
	reservarAssento() {
		if (this.assentosDisponiveis > 0) {
			this.assentosDisponiveis--;
			console.log("reserva realizada com sucesso");
		} else {
			console.log("Não há assentos disponíveis para reserva.");
		}
		return this.assentosDisponiveis;
	}
	consultarAssentosDisponiveis() {
		return this.assentosDisponiveis;
	}
}
let meuVoo = new Voo(123, "londrina", "curitiba", 3);
console.log(meuVoo.consultarAssentosDisponiveis());
meuVoo.reservarAssento();
meuVoo.reservarAssento();
meuVoo.reservarAssento();
meuVoo.reservarAssento();

//////////////////////////////////////////////////////////////////////////////////////////

class Livro {
	constructor(titulo, autor, disponivel) {
		this.titulo = titulo;
		this.autor = autor;
		this.disponivel = disponivel;
	}
	emprestar() {
		if (this.disponivel) {
			console.log("emprestando livro... OK");
			return (this.disponivel = false);
		} else if (this.disponivel == false) {
			console.log(`${this.titulo} Está indisponivel`);
		} else {
			console.log("erro inesperado");
		}
	}
	devolver() {
		if (this.disponivel == false) {
			console.log("devolvendo livro... OK");
			return (this.disponivel = true);
		} else {
			return console.log(`${this.titulo} já está na biblioteca. ué?`);
		}
	}
	consultarDisponibilidade() {
		console.log("está diponivel? " + this.disponivel);
		return this.disponivel;
	}
}
let meuLivro = new Livro("dom casmurro", "machado de assis", true);
meuLivro.consultarDisponibilidade();
meuLivro.emprestar();
meuLivro.consultarDisponibilidade();
meuLivro.devolver();
meuLivro.consultarDisponibilidade();
meuLivro.devolver();
