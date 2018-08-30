import express from 'express'
var app = express();
import rndstring from 'randomstring'
import bodyParser from 'body-parser'
import path from 'path'
import firebase from 'firebase'
import cookieSession from 'cookie-session'
import session from 'express-session'
import sessionstore from 'sessionstore'
var cors = require('cors')();
//mockgongso.firebaseapp.com

app.use(cors)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieSession({
  keys: ['MOCKat32'],
  cookie: {
    maxAge: 1000 * 60 * 60 // 유효기간 1시간
  }
}))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

import {Users, Shop} from './mongo';
require('./func')


var config = {
  apiKey: 'AIzaSyCPZ08oFZTxMvuIQE3AEZW71AM4Ri8aKQw',
  authDomain: 'mockgongso.firebaseapp.com'
}
var FBapp = firebase.initializeApp(config);
let passport = require('./passport')(Users);


app.post('/isauth', (req, res, next)=>{
  if (req.isAuthenticated()) res.status(200).json({message : "User Auth!"});
  res.redirect('/auth/signin');
});

const PORT = 3321;
app.listen(PORT, ()=>{
  console.log('Server On!')
})
require('./routes/webLink')(app);
require('./routes/auth/auth')(app, Users, passport, firebase, rndstring);
require('./routes/mandal/new_mandalS')(app, passport, Users, rndstring);
require('./routes/mandal/getMandal')(app, passport, Users, rndstring);
require('./routes/mandal/setMandal')(app, passport, Users, rndstring);
