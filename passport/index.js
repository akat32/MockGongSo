var social = require('./social.json')
var passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GitHubTokenStrategy = require('passport-github-token')
const TwitterTokenStrategy = require('passport-twitter-token')
const FacebookTokenStrategy = require('passport-facebook-token') 
module.exports = (Users) =>{
  //passport serialize
  passport.serializeUser((user, done)=>{done(null, user);});
  passport.deserializeUser((obj, done)=>{done(null, obj);});
  
  passport.use(new LocalStrategy({ // local 전략을 세움
      usernameField: 'id',
      passwordField: 'passwd',
      session: true, // 세션에 저장 여부
      passReqToCallback: false,
    }, async function(id, passwd, done){
      var user = await Users.findOne({id: id, passwd: passwd}, {__v: 0, _id:0});
      if(!user) return done({message:"아이디나 비밀번호가 틀렸습니다."},false,null);
      else return done(null,user);
  }));
  
    
  if(social.facebook.use){
    passport.use(new FacebookTokenStrategy({
      clientID: social.facebook.clientID,
      clientSecret: social.facebook.clientSecret,
      profileFields: ['id', 'displayName', 'photos'],
    }, (accessToken, refreshToken, profile, done)=>{
      console.log(profile)
      done(null, profile);
    }));
  }
  return passport;
}
