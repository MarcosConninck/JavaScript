let { readFile, writeFile } = require("fs");

readFile("arquivo.txt", "utf-8", (error, text) => {
	if (error) {
		throw error;
	} else {
		console.log(text);
	}
});

// sobreescreve o texto original
writeFile("arquivo.txt", "texto a ser adicionado", (error) => {
	if (error) {
		throw error;
	} else {
		console.log("texto escrito com sucesso");
	}
});
