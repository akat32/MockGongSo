const express = require('express');
const app = express();
const rndstring = require('randomstring');
const bodyParser = require('body-parser')
require('./mongo')
let passport = require('./passport')(Users);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));



require('./routes/auth')(app, rndstring, Users,  passport);
var mandal = require('./routes/mandal')(express, Users, passport)
app.use('/mandal',mandal);

module.exports = app;
