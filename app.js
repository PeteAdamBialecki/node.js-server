//Problem: we need a simple way to look at a users badge count and Javascript point from a web brower

//Solution: Use Node.js to perform the profile look ups and server our template via HTTP

//1. Create a web server
const http = require('http');

//const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello there friend...\n');
});

server.listen(port, () => {
  console.log(`Node.js server running...`);
});

//2 Handle HTTP route GET / and