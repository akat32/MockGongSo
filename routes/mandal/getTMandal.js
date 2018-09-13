module.exports = getTMandal;

function getTMandal(app, passport, Users, rndstring){
  app.post('/getTMandalChk/app', async(req,res)=>{
    var result = await Users.findOne({token : req.body.token})
    if(!result) return res.status(401).json({message : "Not Found!"})
    if(!result.triangleMandalArt.triangleMandalChk) return res.status(404).json({message : "Mandal Not Found!"})
    var re = {
      title : result.triangleMandalArt.title,
      achievement : result.triangleMandalArt.achievement,
      mandal : result.triangleMiddleMandalArt
    }
    res.status(200).json({re : re});
  })


}
