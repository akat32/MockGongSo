var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/STAc');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () { console.log("Mongo On"); });

var UsersSchema = mongoose.Schema({
  
});
Users = mongoose.model('users', UsersSchema);

// require('./err')(UsersSchema);

exports.Users = Users;
exports.db = db;