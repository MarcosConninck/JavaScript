const { createServer, request } = require("http");

let server = createServer((request, response) => {
	response.writeHead(200, { "content-type": "text/html" });
	response.write(`
        <h1>Hello, World!</h1>
        <p>Primeira página com Node.js</p>
        `);
	response.end;
});

server.listen(8000);

console.log("ouvindo a porta 8000");
