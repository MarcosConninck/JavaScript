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

let validaIP = /\d+/;
