module.exports = auth;

function auth(app, Users, passport, firebase, rndstring){
  app.use(passport.initialize());
  app.use(passport.session());


  app.post('/signinWeb', passport.authenticate('local', {failureRedirect: '/'}),(req, res) => {
    res.status(200).json({message : "Success!"});
  })
  .post('/signin', async(req,res)=>{
    var result = await Users.findOne({id : req.body.id, passwd : req.body.passwd})
    if(!result)
    return res.status(404).json({message : "User Not Found"})
    else return res.status(200).json({message : "Success!"});
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
