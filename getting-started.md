# **Node.js**

## **Quick Start Sample Node.js Template**

To get started with a terminal based Node.js project, follow these steps:

- Create directory

- 'npm init'

- 'npm install express --save -dev'

- Create 'app.js' with the following code:

        const express = require('express');
        const app = express();

        app.get('/', function (req, res) {
            res.send('Hello World!');
        });

        app.listen(3000, function () {
            console.log('Example app listening on port 3000!');
        });

- Created additional required files and link them at the top of app.js (sample below):

        var main = require('./main');

- To run, enter the command 'node app.js'.