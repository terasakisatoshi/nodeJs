const http = require("http");

var server = http.createServer(
    (request,response)=>{
        response.end("Hello Node.js!");
    }
);

server.listen(3000);

//usage node hello.js