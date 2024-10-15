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
console.log(document.getElementsByClassName("lista-1"));
console.log(document.getElementsByClassName("lista"));

console.log("////////////////////////////////////////////////////////////////");
console.log("querySelector");
console.log(document.querySelector("#container-principal h1"));
console.log(document.querySelector("h1"));
console.log(document.querySelector("#container-secundario"));
console.log(document.querySelector("body div ul li"));
console.log(document.querySelector("footer a"));
console.log(document.querySelector(".primeira-lista"));

console.log("////////////////////////////////////////////////////////////////");
console.log("inserBefore");

let title = document.querySelector("#titulo-principal");
let paragrafoAcima = document.createElement("p");
let texto = document.createTextNode("algum texto");
paragrafoAcima.appendChild(texto);
let elementoPai = document.querySelector("#container-principal");
elementoPai.insertBefore(paragrafoAcima, title);

console.log("////////////////////////////////////////////////////////////////");
console.log("appendChild");

let lista = document.querySelector(".primeira-lista"); // poderia também utilizar .parentNode para especificar o pai
let novoItemLista = document.createElement("li");
let textoNovoItemLista = document.createTextNode("texto do novo item da lista");
novoItemLista.appendChild(textoNovoItemLista);
lista.appendChild(novoItemLista);

console.log("////////////////////////////////////////////////////////////////");
console.log("replaceChild");

let titulo = document.querySelector("#titulo-principal");
let novoTitulo = document.createElement("h1");
novoTitulo.textContent = "NOVO TITULO";
let paiTitulo = titulo.parentNode;
paiTitulo.replaceChild(novoTitulo, titulo);

console.log("////////////////////////////////////////////////////////////////");
console.log("appendChild");

let p = document.getElementById("p-sem-texto");
let pTexto = document.createTextNode("Novo conteudo do <p> adicionado");
p.appendChild(pTexto);
console.log(p);

console.log("////////////////////////////////////////////////////////////////");
console.log("createElement");

let span = document.createElement("span");
let elemento = document.querySelector("div h1");
let paiElemento = elemento.parentElement;
let conteudoSpan = document.createTextNode("SPAN");
span.appendChild(conteudoSpan);
paiElemento.insertBefore(span, elemento);
console.log(paiElemento);

console.log("////////////////////////////////////////////////////////////////");
console.log("get set atribute");

let href = document.querySelector("body footer a");
console.log(href.getAttribute("href"));
let newHref = "https://www.youtube.com";
href.setAttribute("href", newHref);

console.log("////////////////////////////////////////////////////////////////");
console.log("get width height");

let elTeste = document.querySelector("h1");
console.log(elTeste.clientWidth); // largura total
console.log(elTeste.clientHeight); // altura total

console.log("////////////////////////////////////////////////////////////////");
console.log("elements position");

let elTeste1 = document.querySelector("h1");
console.log(elTeste1.getBoundingClientRect());

console.log("////////////////////////////////////////////////////////////////");
console.log("change CSS with JS");

let elTeste2 = document.querySelector("h1");
setTimeout(() => {
	elTeste2.style.color = "red"; // sobrepõe o CSS
	elTeste2.style.backgroundColor = "green"; // sobrepõe o CSS
}, 2000);

console.log("////////////////////////////////////////////////////////////////");
console.log("querySelectorAll");

let itens = document.querySelectorAll(".lista");
console.log(itens);

for (let i = 0; i < itens.length; i++) {
	setTimeout(() => {
		itens[i].style.color = "red";
	}, i * 1000);
}
