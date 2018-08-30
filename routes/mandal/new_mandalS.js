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
    console.log(mandal)
    var result = await Users.update({token : req.user.token}, {$set : {userMandalArt : mandal}});
    if(result) res.status(200).json({message : "success!"});
    else res.status(500).json({message : "update err!"});
  })
  .get('/mandal',(req,res)=>{
    if(req.user.MandalChk) res.render('mandal.html')
    else res.render('Square_mandal.html')
  })
  .get('/mandals',(req,res)=>{
    res.render('mandal.html');
  })
}
