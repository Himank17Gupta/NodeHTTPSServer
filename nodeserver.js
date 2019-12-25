const https = require('https');
const http=require('http');
const fs = require('fs');


const options = {
  key: fs.readFileSync('key.pem').toString(),
  cert: fs.readFileSync('certificate.pem').toString(),
  passphrase: fs.readFileSync('passphrase.txt').toString()
};

//console.log(options.cert.toString());

http.createServer( function (req, res) {
    console.log('http server started 8001');
    res.writeHead(200);
    res.end("hello world \n ");
  }).listen(8001);

https.createServer(options, function (req, res) {
  console.log('https server started');
  res.writeHead(200);
  res.end("hello world\n");
}).listen(8000);