var Profile = require("./profile.js");

function home(request, response) {
    if(request.url === '/') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.write('Header\n');
    response.write('Search\n');
    response.end('Footer\n');
    }
}

function user(request, response) {
    let username = request.url.replace('/','');
        if (username.length > 0) {
            response.setHeader('Content-Type', 'text/plain');
            response.write('Header\n');

            var studentProfile = new Profile(username);

            studentProfile.on('end', function(profileJSON){
                var values = {
                    avatarUrl: profileJSON.gravatr_url,
                    username: profileJSON.profile_name,
                    badges: profileJSON.badges.length,
                    javascritPoints: profileJSON.points.length,
                }
                response.write(values.username + ' has ' + values.badges + ' badges.\n');
                response.end('Footer\n');
            });

            studentProfile.on('error', function(error){
                response.write(error.message + '\n');
                response.end('Footer\n');
            });
        }
}






module.exports.home = home;
module.exports.user = user;