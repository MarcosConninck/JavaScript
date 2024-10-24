const express = require("express");
const app = express(); // criar o servidor
const db = require("./db/connection"); // importa conexao banco de dados
const PORT = 3000; // criar a porta
const bodyParser = require("body-parser");

app.listen(PORT, () => {
	console.log(`express funcionando na porta ${3000}`);
});

// body parser
app.use(bodyParser.apply({ extended: false }));

// db connection
// criar teste
db.authenticate()
	.then(() => {
		console.log("DB connected successfully");
	})
	.catch((err) => {
		console.log("an error occured", err);
	});

//routes
app.get("/", (req, res) => {
	res.send("está funcionando 3");
});

// jobs routes
app.use("/jobs", require("./routes/jobs"));
