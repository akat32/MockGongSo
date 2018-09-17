module.exports = auth;

function auth(app, Users, passport, rndstring){
  app.use(passport.initialize());
  app.use(passport.session());


  app.post('/signinWeb', passport.authenticate('local', {failureRedirect: '/'}),(req, res) => {
    res.status(200).json({message : "Success!"});
  })
  .post('/signin', async(req,res)=>{
    var result = await Users.findOne({email : req.body.email, passwd : req.body.passwd})
    if(!result) return res.status(404).json({message : "User Not Found"})
    var data = {
      token : result.token,
      name : result.name,
      startDay : result.userMandalArt.startDay,
      MandalChk : result.MandalChk,
      achievement : result.userMandalArt.achievement
    }
    return res.status(200).json({data : data});
  })
  .post('/duplicatechk', async(req,res)=>{
    var result = await Users.findOne({email : req.body.email})
    if(result) return res.status(409).json({message : "User duplicate"})
    else return res.status(200).json({message : "Not duplicate"})
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
