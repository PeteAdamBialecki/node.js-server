var unsecurePlainTextPassword = 'password';
var colors = require('colors');
var bcrypt = require('bcrypt');
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(unsecurePlainTextPassword, salt, function(err, hash) {
        console.log(hash.blue);
    });
});

var router = require('./router.js')

const http = require('http');

//const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    router.home(request, response);
    router.user(request, response);
});

server.listen(port, () => {
  console.log(`Node.js server running...`);
});