// cria como um objeto

const reg1 = new RegExp("test");

console.log(reg1.test("tem teste?")); // true
console.log(reg1.test("não tem")); // false

// ou

const reg2 = /test/;
console.log(reg1.test("tem teste?")); // true
console.log(reg1.test("não tem")); // false

let text = "tem teste na frase?";
console.log(reg2.test(text)); // true

console.log(/quadrado/.test("tem um quadrado nesta string?")); // true, on the flag
console.log(/quadrado/.test("123132214quadradoadsae")); // true, on the flag

console.log("/////////////////////////////////////////////////////////");

console.log("Conjunto de Caracteres:");
console.log(/[123]/.test("existe 123 aqui?")); //true para qualquer um dos números, assim como 23.
console.log(/[123]/.test("e 4 aqui?")); // false
console.log(/[0-9]/.test("8 tá aqui dentro?")); // true, qualquer número, \d

console.log("/////////////////////////////////////////////////////////");
console.log("Chars especiais");
const pontoRegex = /./; // aceita tudo
console.log(".");
console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123asd"));

const dRegex = /\d/; // [0-9] qualquer número
console.log("d");
console.log(dRegex.test("2")); // atenção! retorna true tb
console.log(dRegex.test(2)); //
console.log(dRegex.test("a")); // false

const dRegex2 = /\D/; // [^0-9]
console.log("D");
console.log(dRegex2.test("asd")); // true, não tem número
console.log(dRegex2.test(" ")); // true, não tem número
console.log(dRegex2.test("123")); // false, tem número
console.log(dRegex2.test("123asd")); // true, não tem número

const sRegex2 = /\s/; // só caracteres com espaço, tab, quebra de linha
console.log("s");
console.log(sRegex2.test("asd"));
console.log(sRegex2.test(" ")); //true
console.log(sRegex2.test("123"));
console.log(sRegex2.test("123asd"));

const wRegex = /\w/; // apenas números e letras
console.log("w");
console.log(wRegex.test("asd"));
console.log(wRegex.test(" ")); // false
console.log(wRegex.test("123"));
console.log(wRegex.test("123asd"));

console.log("/////////////////////////////////////////////////////////");
let ano = /\d\d\d\d/;
console.log(ano.test("05")); // false, não tem 4 caracteres
console.log(ano.test("2019")); // true, tem 4 carac
console.log(ano.test("20192") && "20192".length == 4); // false, por conta da condicional
console.log(ano.test("    ")); // false, tem espaço
console.log(ano.test("opa")); // false

console.log("/////////////////////////////////////////////////////////");
let palavraTresLetras = /\w\w\w/;
console.log(palavraTresLetras.test("dia")); // true, tem 3 letras
console.log(palavraTresLetras.test("ano")); // true, tem 3 letras
console.log(palavraTresLetras.test("oi")); // false, tem menos de 2 letras
console.log(palavraTresLetras.test("teste") && "teste".length == 3); // false pela condicional, tem 3+ \w

console.log("/////////////////////////////////////////////////////////");
const notAb = /[^ab]/;
console.log(notAb.test("a"));
console.log(notAb.test("Aqui tem a"));

const notAz = /[^a-z]/;
console.log(notAz.test("rapazz"));
console.log(notAz.test("rapazz234"));
console.log(notAz.test("123"));

console.log("/////////////////////////////////////////////////////////");
let muitosOuPoucosDigitos = /\d+/;
console.log(muitosOuPoucosDigitos.test("928618247")); // true
console.log(muitosOuPoucosDigitos.test("1")); // true
console.log(muitosOuPoucosDigitos.test("")); // false
console.log(muitosOuPoucosDigitos.test("aaa")); // false

console.log("/////////////////////////////////////////////////////////");
let opcional = /Prova\s?\d?/;
console.log(opcional.test("Prova 1")); // true
console.log(opcional.test("Prova  2")); // true
console.log(opcional.test("Prova")); // true

const padrao = /abacax?i/;
console.log(padrao.test("abacaxi")); // true
console.log(padrao.test("abacai")); // true

const padrao2 = /\d+\w?/; // tem que ter digito(s) e pode ter letras
console.log(padrao2.test("123a")); // true, tem digito e alfanum dps
console.log(padrao2.test("123")); // true, tem digito
console.log(padrao2.test("123 ")); // true (digitos) e espaço no final
console.log(padrao2.test("abc")); // false (não tem digitos)

console.log("/////////////////////////////////////////////////////////");
console.log("ocorrencia precisa");

const telefone = /\d{4,5}-\d{4}/;
console.log(telefone.test("3321-7829"));

const cep = /\d{5}-\d{3}/;
console.log(cep.test("86062-050"));

const telDDD = /\(\d{2}\)\s\d{4,5}-\d{4}/; // \( -> para escapar o caractere (
console.log(telDDD.test("(43) 9999-9999"));

console.log("/////////////////////////////////////////////////////////");
console.log("Método Exec");

const teste = /\d+/;

console.log(teste.exec("O número 100")); // retorna o index de onde começa a correspondência
console.log(teste.exec("O número aqui?")); // null

console.log("/////////////////////////////////////////////////////////");
console.log("Método Match");

const teste1 = "O número é 100".match(/\d+/);
console.log(teste1);
console.log(teste1.index);

console.log("/////////////////////////////////////////////////////////");
console.log("Choice Pattern");

let frutas = /\d+\s?(banana?|maça?|laranja?)/;

console.log(frutas.test("10 bananas"));
console.log(frutas.test("15 batatas"));
console.log(frutas.test("2 laranjas"));
console.log(frutas.test("2maças"));
console.log(frutas.test("2maça"));

const reg = /\w+: (marcos|dias|rafael)/;
console.log(reg.test("nome: marcos")); //true
console.log(reg.test("nome: marco")); //false

console.log("/////////////////////////////////////////////////////////");
console.log("Validando domínios");

let validarDominio = /(www.)?\w+\.(com.br|com)/;

console.log(validarDominio.test("www.google.com.br"));
console.log(validarDominio.test("www.google.com"));
console.log(validarDominio.test("www.google")); // false
console.log(validarDominio.test("teste.com"));

console.log("/////////////////////////////////////////////////////////");
console.log("validar e-mail");

const validarEmail = /\w+@\w+\.com(.\w\w)?/;

console.log(validarEmail.test("emailexemplo@gmail.com"));
console.log(validarEmail.test("jose@gov.com"));
console.log(validarEmail.test("josegov.br"));

console.log("/////////////////////////////////////////////////////////");
console.log("validar data de nascimento");

// const verificaNascimento = /\d{2}\/\d{2}\/(\d{2}|\d{4})/;
const verificaNascimento =
	/^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[0-2])[/](19[2-9][0-9]|20[12][0-9])$/;

console.log(verificaNascimento.test("24/06/1994")); // true
console.log(verificaNascimento.test("35/13/1900")); // false
console.log(verificaNascimento.test("24/06/1994")); // true
console.log(verificaNascimento.test("1./06/1994")); // false
console.log(verificaNascimento.test("1/0/194")); // false
console.log(verificaNascimento.test("12/2/94")); // false
