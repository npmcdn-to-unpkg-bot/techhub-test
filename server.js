var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, \Authorization');
    next();
});

app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/node_modules'));

app.get('/api',function(req,res){
    var request = require("request");
    request("https://cache.techhub.com/events", function(error, response, body) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(body);
        res.end();
    });

});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/app/index.html'));
});

app.listen(port);
console.log('magic happens on port ' + port);
