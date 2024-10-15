let btn = document.querySelector("#btn"); // lembrar de chamar o script no FIM do HTML
let btn1 = document.querySelector("#btn1");

function msg() {
	console.log("clicou em mim"); // ação mediante ao evento criado
}

btn.addEventListener("click", msg);

btn1.addEventListener("click", () => {
	btn.removeEventListener("click", msg); // faz o botão parar de funcionar
});
