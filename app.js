const express = require('express');
const app = express();
const rndstring = require('randomstring');
require('./mongo')
let passport = require('./passport')(Users);




require('./routes/auth')(app , rndstring, Users,  passport);


module.exports = app;