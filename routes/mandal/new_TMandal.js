module.exports = new_TMandal;

function new_TMandal(app, passport, Users, rndstring){
  app.post('/tmake/app', async (req,res)=>{
    var new_mandal = {
      title : req.body.title,
      triangleMandalChk : true,
      startDay : req.body.startDay
     }
    for(var i = 0; i < 3; i++){
      var middle = {
        order : i,
        middleTitle : req.body.middle[i].title,
        smallMandalArt1 : {title : req.body.middle[i].small[0]},
        smallMandalArt2 : {title : req.body.middle[i].small[1]},
        smallMandalArt3 : {title : req.body.middle[i].small[2]}
      }
      var result = await Users.update({token : req.body.token}, {$push : {triangleMiddleMandalArt : middle}})
      if(!result.ok) return res.status(500).json({message : "ERR!"})
    }
    result = await Users.update({token : req.body.token}, {$set : {triangleMandalArt : new_mandal}})
    if(!result.ok) return res.status(500).json({message : "ERR!"})
    return res.status(200).json({message : "success!"});
  })
}
// {
  // "middle" : [
  //   {
  //     "small" : ["센","치",""],
  //     "title":"십"
  //   },
  //   {
  //     "small" : ["소","지","섭"],
  //     "title":"란"
  //   },
  //   {
  //     "small" : ["밤","캐스퍼","라디오"],
  //     "title" : "한"
  //   }
  // ],
//   "title":"십란",
//   "token":"UAtd2jQ1IO0NeksMTs8JpnHK0",
//   "startDay":"2018-06-23"
// }
