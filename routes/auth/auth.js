module.exports = auth;

function auth(app,Users,passport,firebase){
  app.use(passport.initialize());
  app.use(passport.session());


  app.post('/signinWeb', async (req,res,next)=>{
    passport.authenticate('local', (err,user,info)=>{
      if(err) { return res.redirect('/login')}
      if (!user) { return res.redirect('/login')}
      return res.redirect('/')
    })(req, res, next)
  })
}
