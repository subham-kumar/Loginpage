var express = require('express');
var app = express();
var fs = require('fs');
var port = 8081;

const bodyParser = require('body-parser'); // Middleware
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/login', function (req, res) {
    html = fs.readFileSync('login.html');
    res.writeHead(200);
    res.write(html);
    res.end();
});

// New code
app.get('/', function (req, res) {
    html = fs.readFileSync('index.html');
    res.writeHead(200);
    res.write(html);
    res.end();
});

app.post('/login', (req, res) => {
  //Insert Login Code Here
  let username = req.body.username;
  let password = req.body.password;
  if ( username == 'admin' && password == 'password') {
    res.send(`Login Successfully with Username: ${username} and Password: ${password}`);
  } else {
    res.send(`Login failed due to incorrect username and password`);
  }
  

});

app.listen(port, function() {
  console.log('Server running at http://127.0.0.1:', port);
});