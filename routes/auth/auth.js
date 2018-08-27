module.exports = auth;

function auth(app, Users, passport, firebase, rndstring){
  app.use(passport.initialize());
  app.use(passport.session());


  app.post('/signinWeb', async (req,res,next)=>{
    passport.authenticate('local', (err,user,info)=>{
      if (!user) { return res.status(404).json({message : "User Not Found"})}
      if(err) { return res.status(500).json({message : "Server ERR!"})}
      return res.status(200).json({message : "Success!"});
    })(req, res, next)
  })
  .post('/signup', async(req,res)=>{
    var user = new Users(req.body);
    user.token = rndstring.generate(25);
    try {
      var result = await user.save();
    }catch(e){
      if(e instanceof user_duplicate) return res.status(409).json({message:"already exist"});
      if(e instanceof ValidationError) return res.status(400).json({message: e.message});
      if(e instanceof paramsError) return res.status(400).json({message: e.message});
    }
    res.status(200).json(user);
  })
  .post('/aa', async(req,res)=>{
    var result = await Users.find();
    res.send(result);
  })
}
