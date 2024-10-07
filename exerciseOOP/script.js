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

class ContaBancaria {
	constructor(saldoCC, saldoCP, jurosCP) {
		this.saldoCC = saldoCC;
		this.saldoCP = saldoCP;
		this.jurosCP = jurosCP;
	}
	selecionarConta(conta) {
		if (conta == 1) {
			return "saldoCC";
		} else if (conta == 2) {
			return "saldoCP";
		}
	}
	deposito(valor, conta) {
		if (conta == this.selecionarConta(1)) {
			console.log(
				`Depositado ${valor} na CC. Saldo atual ${(this.saldoCC +=
					valor)}`
			);
			this.saldoCC += valor;
		} else if (conta == this.selecionarConta(2)) {
			console.log(
				`Depositado ${valor} na CP. Saldo atual ${(this.saldoCC +=
					valor)}`
			);
			this.saldoCP += valor;
		} else {
			console.log("valor ou conta incorreta");
		}
	}
	saque(valor, conta) {
		if (conta == "saldoCC") {
			this.saldoCC -= valor;
		} else if (conta == "saldoCP") {
			this.saldoCP -= valor;
		} else {
			console.log("valor ou conta incorreta");
		}
	}
	transferirCPCC(valor) {
		if (valor >= this.saldoCP) {
			console.log("saldo insuficiente para transferir");
		} else {
			this.saldoCC += valor;
		}
	}
}

class ContaHerdada extends ContaBancaria {
	constructor(saldoCC, saldoCP, jurosCP) {
		super(jurosCP, jurosCP * 2);
	}
}

let minhaConta = new ContaBancaria(1000, 100, 0);
minhaConta.deposito(100, 1);
