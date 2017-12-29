const http = require("http");
const fs = require("fs");

function getFromClient(req, res) {
    fs.readFile('./index.html', 'UTF-8',
        (error, data) => {
            var content = data.
            replace(/dummy_title/g, 'replaced title').
            replace(/dummy_content/g, 'replaced content');

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(content);
            res.end();
        }
    )
};

var server = http.createServer(getFromClient);

server.listen(3000);
console.log('Server Start');