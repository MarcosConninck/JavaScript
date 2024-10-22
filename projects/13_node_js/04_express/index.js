let express = require("express");
let app = express();

app.get("/", (request, response) => {
	response.send("Primeira rota com Express");
});
app.get("/teste", (request, response) => {
	response.send("testando outra rota, com postman");
});

app.listen(3000, () => {
	console.log("a aplicação está funcionando na porta 3000");
});
