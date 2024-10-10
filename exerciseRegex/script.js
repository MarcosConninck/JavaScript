console.log("buscando frases com letras maiusculas");
let soAceitaMaiusculas = /[A-Z]/;

console.log(soAceitaMaiusculas.test("Marcos"));
console.log(soAceitaMaiusculas.test("marcos"));
console.log(soAceitaMaiusculas.test("TUDOMAIUSCULO"));

console.log("////////////////////////////////////////////////////////");
console.log("Encontrar apenas strings terminadas com ID");

let buscaID = /\w+.(ID|id)\b/;

console.log(buscaID.test("marcos.id"));
console.log(buscaID.test("marcos.ID"));
console.log(buscaID.test("marcosID"));
console.log(buscaID.test("marcosdi"));
console.log(buscaID.test("id"));
console.log(buscaID.test("3124id"));
console.log(buscaID.test("idiota"));

console.log("////////////////////////////////////////////////////////");
console.log(
	"Regex que aceite a seguinte expressão 'Marca: nomeDaMarca' que pode ser 'Nike, Adidas, Puma, Asics'"
);
let buscaMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(buscaMarca.test("Marca: Nike"));
console.log(buscaMarca.test("Marca:Nike")); //false
console.log(buscaMarca.test("Marca: chiclete")); //false
console.log(buscaMarca.test("Nike")); // false

console.log("////////////////////////////////////////////////////////");
console.log("Regex que valide emdereços de IP");

const validaIP =
	/((([01][0-9][0-9]|2[0-4][0-9]|25[0-5])|([0-9][0-9])|([0-9]))[.]){3}(([01][0-9][0-9]|2[0-4][0-9]|25[0-5])|([0-9][0-9])|([0-9]))/;
console.log(validaIP.test("127.168.0.1"));
console.log(validaIP.test("127.0.0.1"));
console.log(validaIP.test("198.168.255.1"));
console.log(validaIP.test("198.168.256.1")); // false
console.log(validaIP.test("8.8.8.8"));

console.log("////////////////////////////////////////////////////////");
console.log("Valida usuário");

const validaUser = /^[a-z0-9_-]{3,16}$/i;
console.log(validaUser.test("ze_manga123"));
console.log(validaUser.test("ze-manga"));
console.log(validaUser.test("_Zuck"));
console.log(validaUser.test("_Zuc k")); // false
console.log(validaUser.test("Ab")); // false
console.log(validaUser.test("FraseBemGrandeComMaisDe16DigitosTesteaaaaaaaaa")); // false
console.log(validaUser.test("+++nome")); // false
