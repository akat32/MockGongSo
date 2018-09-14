module.exports = diary

function diary(app, passport, Users, rndstring){
  app.post('/addDiary/app', async(req,res)=>{
    var new_diary = {
      date : req.body.date,
      index : req.body.index,
      token : rndstring.generate(21);
    }
    var result = await Users.update({token : req.body.token}, {$push :  {userDiary : new_diary}})
    if(!result.ok) return res.status(500).json({message : "ERR!"})
    return res.status(200).json({message : "success!"})
  })
  .post('/getDiary', async (req,res)=>{

  })
}
