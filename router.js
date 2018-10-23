var renderer = require("./renderer.js");
var querystring = require('querystring');
var commonHeaders = {'Content-Type': 'text/html'}

function home(request, response) {
    if(request.url === '/') {
        if(request.method.toLowerCase() === 'get') {
        response.writeHead(200, commonHeaders);
        renderer.view('header', {}, response);
        renderer.view('index', {}, response);
        renderer.view('footer', {}, response);
        response.end();
        } else {
            request.on('data', function(postBody){
                var query = querystring.parse(postBody.toString());
                response.writeHead(303, {'Location': '/' + query.sample});
                response.end();
            });
        }
    }
}

function testRoute(request, response) {
    var sample = request.url.replace('/','');
        if (sample.length > 0) {
            response.writeHead(200, commonHeaders);
            renderer.view('header', {}, response);
            sample.on('error', function(error){
                renderer.view('error', {errorMessage: error.message}, response);
                renderer.view('index', {}, response);
                renderer.view('footer', {}, response);
                response.end();
            });
        }
}

module.exports.home = home;
module.exports.testRoute = testRoute;