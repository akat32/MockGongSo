module.exports = (express, Users, passport)=>{
  var router = express.Router();
  router.post('/new', async(req,res)=>{
    var mandal = {
      name : req.body.name,
      shape : req.body.shape,
      goal : req.body.goal,
      startDay : new Date().toLocaleDateString()
    }
    var result = await Users.update(
                 {id : req.body.id},
                 {$push : {userMandalArt : mandal}
    });
    if(result.n && result.nModified) return res.status(200).json({message : "success!"});
    else return res.status(500).json({message : "ERR!"})
  })
  .post('/del', async(req,res)=>{
    var result = await Users.update({id : req.body.id}, {$pop : {userMandalArt : req.body.name}})
    if(result.n && result.nModified) return res.status(200).json({message : "success!"})
    else return res.status(500).json({message : "ERR!"});
  })
  .post('/w', async(req, res)=>{

  })
  .post('/r' , async (req,res)=>{
  })
  return router;
}
