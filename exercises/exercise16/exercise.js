let num = prompt("type me a number to see if it is prime");

function isPrime(num) {
	if (num <= 1) return false; // Números menores ou iguais a 1 não são primos
	for (let i = 2; i < num; i++) {
		if (num % i === 0) return false; // Se for divisível por qualquer número além de 1 e ele mesmo, não é primo
	}
	return true; // Se passar por todos os testes, é primo
}

// Exemplo de uso
console.log(`${num} é primo? ${isPrime(num)}`); // Saída: 17 é primo? true
