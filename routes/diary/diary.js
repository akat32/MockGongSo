module.exports = diary

function diary(app, passport, Users, rndstring){
  app.post('/addDiary/app', async(req,res)=>{
    var new_diary = {
      date : req.body.date,
      index : req.body.index,
      token : rndstring.generate(21)
    }
    var result = await Users.update({token : req.body.token}, {$push :  {userDiary : new_diary}})
    if(!result.ok) return res.status(500).json({message : "ERR!"})
    return res.status(200).json({message : "success!"})
  })
  .post('/getDiary/app', async (req,res)=>{
    var user = await Users.findOne({token : req.body.token})
    if(!user) return res.status(404).json({message : "User Not Found!"})
    var diary = user.userDiary;
    var re = [];
    for(var i = 0; diary[i] != null; i++){
      var chk = 0;
      var new_diary = {
        date : "",
        diary : [{
          index : ""
        }]
      }
      for (var j = 0; re[j] != null; j++){
        if(diary[i].date === re[j].date){
          var diaryIndex = { index : diary[i].index }
          re[j].diary.push(diaryIndex);
          chk = 1;
        }
      }
      if(!chk){
        new_diary.date = diary[i].date;
        new_diary.diary[0].index = diary[i].index
        re.push(new_diary);
      }
    }
    function com(a, b){
      if(a.date == b.date){ return 0 }
      return a.date > b.date ? 1 : -1;
    }
    re.sort(com);
    res.status(200).json({re : re});
  })
  .post('/delDiary/app', async (req,res)=>{
    for(var i = 0; req.body.diaryToken[i] != null; i++){
      var result = await Users.update({token : req.body.token}, {$pull : {userDiary : {token : req.body.diaryToken[i]}}})
      if(!result.ok) return res.status(500).json({message : "ERR!"})
    }
    return res.status(200).json({message : "success!"})
  })
}
