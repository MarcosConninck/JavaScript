let btn = document.querySelector("#btn"); // lembrar de chamar o script no FIM do HTML
let btn1 = document.querySelector("#btn1");

function msg() {
	console.log("clicou em mim"); // ação mediante ao evento criado
}

btn.addEventListener("click", msg);

btn1.addEventListener("click", () => {
	btn.removeEventListener("click", msg); // faz o botão parar de funcionar
});

console.log("/////////////////////////////////////////////////");
console.log("objeto do evento");

let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

function msg1(e) {
	console.log(e); // retorna o objeto
}

btn2.addEventListener("click", msg1);

btn3.addEventListener("click", () => {
	btn2.removeEventListener("click", msg1); // faz o botão parar de funcionar
});

console.log("/////////////////////////////////////////////////");
console.log("propagação");

let btn4 = document.querySelector("#btn4");
let p = document.querySelector("p");
p.style.backgroundColor = "gray";

p.addEventListener("click", () => {
	console.log("clicou no p");
});
btn4.addEventListener("click", (e) => {
	console.log("clicou no botão 4");
	e.stopPropagation();
});
console.log("/////////////////////////////////////////////////");
console.log("ações padrão");

let a = document.querySelector("footer a");
a.addEventListener("click", (e) => {
	e.preventDefault(); // basicamente reescreve a ação de clicar no <a>
	console.log("clicou no link mas não saiu da página");
});

console.log("/////////////////////////////////////////////////");
console.log("key events");

window.addEventListener("keydown", (e) => {
	if (e.key === "v") {
		console.log("Usuário apertou V");
	} else if (e.key === "Enter") {
		console.log("Apertou Enter");
	} else if (e.key === " ") {
		console.log("Apertou espaço");
	}
});

window.addEventListener("keyup", (e) => {
	if (e.key === "v") {
		console.log("Soltou V");
	} else if (e.key === "Enter") {
		console.log("Soltou Enter");
	} else if (e.key === " ") {
		console.log("Soltou espaço");
	}
});

console.log("/////////////////////////////////////////////////");
console.log("mouse events");

let btn5 = document.querySelector("#btn5");
btn5.addEventListener("dblclick", () => {
	console.log("double click");
});
let btn6 = document.querySelector("#btn6");
btn6.addEventListener("mousedown", () => {
	console.log("mousedown");
});

console.log("/////////////////////////////////////////////////");
console.log("mouse events");

// window.addEventListener("mousemove", (e) => {
// 	console.log(e.x, e.y);
// });

console.log("/////////////////////////////////////////////////");
console.log("Scroll events");
