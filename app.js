import express from 'express'
var app = express();
import rndstring from 'randomstring'
import bodyParser from 'body-parser'



import {Users, Shop} from './mongo';
//require('./func')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//let passport = require('./passport')(Users);
app.use(passport.initialize());
app.use(passport.session());

const PORT = 3321;


app.listen(PORT, ()=>{
  console.log('Server On!')
})




require('./routes/test')(app);
// require('./routes/auth/auth')(app, Users, passport);