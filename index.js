var express = require('express')
var fs = require('fs')
var https = require('https')
var app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})
app.get('/xyz', function (req, res) {
    res.send('processing request on https servers, all the communication is encrypted');
})

  https.createServer({
  key: fs.readFileSync('key.pem').toString(),
  cert: fs.readFileSync('certificate.pem').toString(),
  passphrase: fs.readFileSync('passphrase.txt').toString()
}, app)
.listen(3000, function () {
  console.log('Demo app listening on port 3000! Go to https://localhost:3000/')
})