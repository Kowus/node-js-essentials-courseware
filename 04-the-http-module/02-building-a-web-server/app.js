var http = require('http');
var server = http.createServer(function (req, res) {
    // Serving plain text
    // res.writeHead(200, {"Content-Type":'text/plain'});
    // res.end("Hello World");

    // Serving html text
    res.writeHead(200, {"Content-Type": 'text/html'});
    res.end(`
        <!DOctype html>
        <html>
            <head>
                <title>Barnabas is Awesome</title>
            </head>
            <body>
                <h1>Here is your plate of plantain chips</h1>
                <p>${req.url}</p>
                <p>${req.method}</p>
            </body>
        </html>
    `);
});

server.listen(3000);
console.log('Server listening on port 3000');