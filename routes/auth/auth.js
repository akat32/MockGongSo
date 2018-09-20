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
      triMandalChk : result.triangleMandalArt.triangleMandalChk,
      name : result.name,
      title : result.userMandalArt.title,
      startDay : result.userMandalArt.startDay,
      MandalChk : result.MandalChk,
      achievement : result.userMandalArt.achievement,
      triTitle : result.triangleMandalArt.title
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
  .get('/auto/:token', async(req,res)=>{
    var result = await Users.findOne({token : req.params.token})
    if(!result) return res.status(404).json({message : "User Not Found!"})
    var data = {
      token : result.token,
      triMandalChk : result.triangleMandalArt.triangleMandalChk,
      name : result.name,
      title : result.userMandalArt.title,
      startDay : result.userMandalArt.startDay,
      MandalChk : result.MandalChk,
      achievement : result.userMandalArt.achievement,
      triTitle : result.triangleMandalArt.title
    }
    return res.status(200).json({data : data})
  })
  .post('/fb/app', async (req,res)=>{
    var result = await Users.findOne({token : req.body.token})
    if(!result){
      var user = {
        token : req.body.token,
        name : req.body.name,
        email : rndstring.generate(25)
      }
      var new_user = new Users(user);
      var user_result = await new_user.save();
      if(user_result.ok) return res.status(500).json({message : "ERR!"})
      return res.status(201).json({data : req.body})
    }
    else {
      var data = {
        token : result.token,
        triMandalChk : result.triangleMandalArt.triangleMandalChk,
        name : result.name,
        title : result.userMandalArt.title,
        startDay : result.userMandalArt.startDay,
        MandalChk : result.MandalChk,
        achievement : result.userMandalArt.achievement,
        triTitle : result.triangleMandalArt.title
      }
      return res.status(200).json({data : data})
    }
  })
}
