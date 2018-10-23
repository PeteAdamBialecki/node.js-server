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
                response.writeHead(303, {'Location': '/' + query.username});
                response.end();
            });
        }
    }
}

function user(request, response) {
    var username = request.url.replace('/','');
        if (username.length > 0) {
            response.writeHead(200, commonHeaders);
            renderer.view('header', {}, response);

            var sample = new Profile(username);
            sample.on('end', function(profileJSON){
                renderer.view('footer', {}, response)
                response.end();
            });

            sample.on('error', function(error){
                renderer.view('error', {errorMessage: error.message}, response);
                renderer.view('index', {}, response);
                renderer.view('footer', {}, response);
                response.end();
            });
        }
}

module.exports.home = home;
module.exports.user = user;