module.exports = getMandal;


function getMandal(app, passport, Users, rndstring){
  app.post('/getMandal', async(req,res)=>{
    var result = await Users.findOne({token : req.user.token})
    if(!result) return res.status(404).json({message : "Not Found!"})
    else if (!req.isAuthenticated()) res.status(401).json({message : "User Not Auth!"});
    else{
      var re = {
        title : result.userMandalArt.title,
        achievement :  result.userMandalArt.achievement,
        mandal : result.middleMandalArt
      }
      return res.status(200).json({re : re})
    }
  })
  .post('/mandalchk/app', async (req,res)=>{
    var result = await Users.findOne({token : req.body.token})
    if(!result) return res.status(404).json({message : "User Not Found!"})
    else if(result.MandalChk == false) return res.status(204).json({message : "User dosen't have MandalArt"})
    else return res.status(200).json({mandal : result.userMandalArt})
  })
}
