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
console.log("mouse click events");

let btn5 = document.querySelector("#btn5");
btn5.addEventListener("dblclick", () => {
	console.log("double click");
});
let btn6 = document.querySelector("#btn6");
btn6.addEventListener("mousedown", () => {
	console.log("mousedown");
});

console.log("/////////////////////////////////////////////////");
console.log("Scroll events");

function handleScroll() {
	if (window.scrollY > 200) {
		console.log("chegou no 200y");
		window.removeEventListener("scroll", handleScroll);
	}
}
window.addEventListener("scroll", handleScroll);

console.log("/////////////////////////////////////////////////");
console.log("focus blur events");

let getInput = document.querySelector("#nome");

getInput.addEventListener("focus", () => {
	console.log("entrou no input");
});
getInput.addEventListener("blur", () => {
	console.log("saiu input");
});

console.log("/////////////////////////////////////////////////");
console.log("loading events");

// window.addEventListener("load", () => {
// 	alert("assine os termos de uso da página");
// });
let nameInput = document.querySelector("#formulario");

const handlerBeforeUnload = (e) => {
	e.preventDefault();
	e.returnValue = true; // utilizar para navegadores mais antigos
};

nameInput.addEventListener("input", (e) => {
	if (e.target.value !== "") {
		window.addEventListener("beforeunload", handlerBeforeUnload);
	} else {
		window.removeEventListener("beforeunload", handlerBeforeUnload);
	}
});

console.log("/////////////////////////////////////////////////");
console.log("debounce com movimento do mouse");

let timeout;
window.addEventListener("mousemove", (e) => {
	clearTimeout(timeout);
	timeout = setTimeout(() => console.log(e.x, e.y), 500);
});
