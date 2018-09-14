module.exports = setTMandal

function setTMandal(app, passport, Users, rndstring){
  app.post('/Tset/app', async(req,res)=>{
    for(var i = 0; i < 3; i++){
      var middle = {
        order : i,
        middleTitle : req.body.middle[i].title,
        smallMandalArt1 : {title : req.body.middle[i].small[0]},
        smallMandalArt2 : {title : req.body.middle[i].small[1]},
        smallMandalArt3 : {title : req.body.middle[i].small[2]}
      }
      var result = await Users.update({token : req.body.token}, {$pull : {triangleMiddleMandalArt : {order : i}}})
      if(!result.ok) return res.status(500).json({message : "ERR!"})
      result = await Users.update({token : req.body.token}, {$push : {triangleMiddleMandalArt : middle}})
      if(!result.ok) return res.status(500).json({message : "ERR!"})
    }
    return res.status(200).json({message : "success!"})
  })
}
