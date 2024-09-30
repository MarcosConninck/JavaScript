let inteiro = Number(
	prompt(
		"digite o número para ver se é positivo, par, impar, negativo ou zero"
	)
);
function classificarNumero(inteiro) {
	if (inteiro > 0 && inteiro % 2 === 0) {
		return console.log("Positivo e Par");
	} else if (inteiro > 0 && inteiro % 2 !== 0) {
		return console.log("Positivo e Ímpar");
	} else if (inteiro < 0) {
		return console.log("Negativo");
	} else if (inteiro === 0) {
		return console.log("Neutro");
	}
}

classificarNumero(inteiro);
