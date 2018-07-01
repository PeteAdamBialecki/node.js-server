const https = require('https');

function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`
  console.log(message);
}

function getProfile(username) {

const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
  let body = "";

  response.on('data', data => {
    body += data.toString();
  });

  response.on('end', () => {
    const profile = JSON.parse(body);
    console.dir(profile);
  });

});

}

const users = ["chalkers", "alenaholligan"];

users.forEach(getProfile);