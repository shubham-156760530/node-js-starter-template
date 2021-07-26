const express = require('express');
const path = require('path');
const pug = require('pug');
const http = require('http');
const urlencoded = require('url');
const rootRouter = require('./routes/index');

var app = express();
var server = http.createServer(app);

app.set('port', process.env.PORT || 9000);
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', rootRouter.homepage);
app.get('/register', rootRouter.register);
app.post('/make-registration', rootRouter.makeRegistration);

server.listen(app.get('port'), function(){
    console.log("running");
});