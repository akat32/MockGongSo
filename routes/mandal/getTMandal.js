module.exports = getTMandal;

function getTMandal(app, passport, Users, rndstring){
  app.post('/getTMandalChk', async(req,res)=>{
    var result = await Users.findOne({token : req.body.token})
    if(!result) return res.status(404).json({message : "User Not Found!"})
    if(!result.triangleMandalArt.triangleMandalChk) return res.status(401).json({message : "Not Found!"})
    var re = {
      title : result.triangleMandalArt.title,
      achievement : result.triangleMandalArt.achievement,
      mandal : result.triangleMiddleMandalArt
    }
    res.status(200).json({re : re});
  })


}
