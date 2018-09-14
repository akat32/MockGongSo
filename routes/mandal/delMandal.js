module.exports = delMandal

function delMandal(app, passport, Users, rndstring){
  app.post('/delMain/app' ,async (req,res)=>{
    var user = Users.findOne({token : req.body.token})
    var result = await Users.update({token : req.body.token}, {$set : {MandalChk : false}})
    if(!result.ok) return res.status(500).json({message : "ERR!"})
    for(var i = 0; i < 8; i++){
      result = await Users.update({token : req.body.token}, {$pop : {middleMandalArt : 1}})
      if(!result.ok) return res.status(500).json({message : "ERR!"})
    }
    return res.status(200).json({message : "success!"})
  })
  .post('/delSub/app', async (req,res)=>{
    var user = await Users.findOne({token : req.body.token})
    var mandal = user.triangleMandalArt;
    mandal.triangleMandalChk = false;
    var result = await Users.update({token : req.body.token}, {$set : {triangleMandalArt : mandal}})
    if(!result.ok) return res.status(500).json({message : "ERR!"})
    for(var i = 0; i < 3; i++){
      result = await Users.update({token : req.body.token}, {$pop : {triangleMiddleMandalArt : 1}})
      if(!result.ok) return res.status(500).json({message : "ERR!"})
    }
    return res.status(200).json({message : "success!"})
  })
}
