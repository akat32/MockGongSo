module.exports = getMandal;


function getMandal(app, passport, Users, rndstring){
  app.post('/getTitle', async(req,res)=>{
    var result = await Users.findOne({token : req.user.token})
    if(!result) return res.status(404).json({message : "Not Found!"})
    else if (!req.isAuthenticated()) res.status(401).json({message : "User Not Auth!"});
    else{
      var re = {
        title : result.userMandalArt.title,
        achievement :  result.userMandalArt.achievement
      }
      return res.status(200).json({re : re})
    }
  })
}
