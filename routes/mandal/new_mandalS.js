module.exports = new_mandalS;

function new_mandalS(app, passport, Users, rndstring){
  app.post('/makeBtn', async (req,res)=>{
    if (req.isAuthenticated()) res.status(200).json({message : "authed!"})
    else res.status(401).json({message : "User Not authed!"})
  })
  .post('/make', async (req,res)=>{
    var mandal = {
      title : req.body.title,
    }
    var result = await Users.update({token : req.user.token}, {$set : {userMandalArt : mandal}});
    if(!result) return res.status(500).json({message : "update err!"});
    result = await Users.update({token : req.user.token}, {$set : {MandalChk : true}})
    if(!result) return res.status(500).json({message : "update err!"});
    res.status(200).json({message : "success!"});
  })
  .get('/mandal',async(req,res)=>{
    var result = await Users.findOne({token : req.user.token});
    if(result.MandalChk) res.render('mandal.html')
    else res.render('Square_mandal.html')
  })
  .get('/mandals',(req,res)=>{
    res.render('mandal.html');
  })
  .post('/make/app', async (req,res)=>{
    console.log(req.body)
    res.status(200).json({json : req.body});
  })
}
