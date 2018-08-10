module.exports = auth;



function auth(app, Users, passport){
  app.get('/fb/web', passport.authenticate('facebook', (req,res)=>{
    console.log(req)
  }))
}
