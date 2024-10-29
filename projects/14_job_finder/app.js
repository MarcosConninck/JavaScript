const express = require("express");
const expressHandleBars = require("express-handlebars");
const path = require("path");
const app = express(); // criar o servidor
const db = require("./db/connection"); // importa conexao banco de dados
const PORT = 3000; // criar a porta
const bodyParser = require("body-parser");
const Job = require("./models/job");

app.listen(PORT, () => {
	console.log(`express funcionando na porta ${3000}`);
});
// app handlebars
app.set("views", path.join(__dirname, "views"));

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.engine(
	"handlebars",
	expressHandleBars.engine({ defaultLayout: "../main" })
);
app.set("view engine", "handlebars");

// static folder
app.use(express.static(path.join(__dirname, "public")));

// db connection
db.authenticate()
	.then(() => {
		console.log("DB connected successfully");
	})
	.catch((err) => {
		console.log("an error occured", err);
	});

//routes
app.get("/", (req, res) => {
	Job.findAll({ order: [["createdAt", "DESC"]] }).then((jobs) => {
		res.render("layouts/index", { jobs });
	});
});

// jobs routes
app.use("/jobs", require("./routes/jobs"));

// const express = require("express");
// const exphbs = require("express-handlebars");
// const app = express();
// const path = require("path");
// const db = require("./db/connection");
// const bodyParser = require("body-parser");

// const PORT = 3001;

// app.listen(PORT, function () {
// 	console.log(`O Express está rodando na porta ${PORT}`);
// });

// // body parser
// app.use(bodyParser.urlencoded({ extended: false }));

// // handle bars
// app.set("views", path.join(__dirname, "views"));
// app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // static folder
// app.use(express.static(path.join(__dirname, "public")));

// // db connection
// db.authenticate()
// 	.then(() => {
// 		console.log("Conectou ao banco com sucesso");
// 	})
// 	.catch((err) => {
// 		console.log("Ocorreu um erro ao conectar", err);
// 	});

// // routes
// app.get("/", (req, res) => {
// 	let search = req.query.job;
// 	let query = "%" + search + "%"; // PH -> PHP, Word -> Wordpress, press -> Wordpress

// 	if (!search) {
// 		Job.findAll({ order: [["createdAt", "DESC"]] })
// 			.then((jobs) => {
// 				res.render("index", {
// 					jobs,
// 				});
// 			})
// 			.catch((err) => console.log(err));
// 	} else {
// 		Job.findAll({
// 			where: { title: { [Op.like]: query } },
// 			order: [["createdAt", "DESC"]],
// 		})
// 			.then((jobs) => {
// 				console.log(search);

// 				res.render("index", {
// 					jobs,
// 					search,
// 				});
// 			})
// 			.catch((err) => console.log(err));
// 	}
// });

// // jobs routes
// // app.use("/jobs", require("./routes/jobs"));

// //routes
// app.get("/", (req, res) => {
// 	res.render("main");
// });

// // jobs routes
// app.use("/jobs", require("./routes/jobs"));
