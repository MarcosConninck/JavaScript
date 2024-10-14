console.log(document);
console.log(document.body);
console.log(document.body.childNodes); // lista todos elementos do body
console.log(document.body.childNodes[1].childNodes); // lista elementos dentro deste nó
console.log(document.body.childNodes[1].childNodes[1]); // <div> entendendo protocolos
console.log(document.body.childNodes[1].childNodes[1].innerText); // conteudo entendendo protocolos

console.log("////////////////////////////////////////////////////////////////");
console.log("getElementsByTagName");
console.log(document.getElementsByTagName("h1")); // todos titulos
console.log(document.getElementsByTagName("ul")); //todas listas
console.log(document.getElementsByTagName("p")); //todos <p>

console.log("////////////////////////////////////////////////////////////////");
console.log("getElementById");
console.log(document.getElementById("titulo-principal").innerText); //pega pelo id

console.log("////////////////////////////////////////////////////////////////");
console.log("getElementsByClassName");
console.log(document.getElementsByClassName("lista"));
