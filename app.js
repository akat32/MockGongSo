import express from 'express'
var app = express();
import rndstring from 'randomstring'
import bodyParser from 'body-parser'
import path from 'path'
import firebase from 'firebase'
//mockgongso.firebaseapp.com
import {Users, Shop} from './mongo';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

require('./func')

var config = {
  apiKey: 'AIzaSyCPZ08oFZTxMvuIQE3AEZW71AM4Ri8aKQw',
  authDomain: 'mockgongso.firebaseapp.com'
}
var FBapp = firebase.initializeApp(config);


let passport = require('./passport')(Users);

const PORT = 3321;
app.listen(PORT, ()=>{
  console.log('Server On!')
})


require('./routes/webLink')(app);
require('./routes/auth/auth')(app, Users,passport, firebase);
