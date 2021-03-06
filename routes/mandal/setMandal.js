module.exports = setMandal

function setMandal(app, passport, Users, rndstring){
  app.post('/set', async(req,res)=>{
    if (!req.isAuthenticated()) res.status(401).json({message : "User Not Authed!"});
    var user = await Users.findOne({token : req.user.token});
    if(!user) return res.status(404).json({message : "User Not Found!"})
    for(var i=0; i < 8;i++){
      var some = {order : i}
      var result = await Users.update(
        {"token" : req.user.token},
        {$push : {middleMandalArt : some}
      });
      if(!result.ok) return res.status(500).json({message : "ERR!"});
    }
    result = await Users.findOne({token : req.user.token});
    var re = {
      title : result.userMandalArt.title,
      achievement :  result.userMandalArt.achievement,
      mandal : result.middleMandalArt
    }
    return res.status(200).json(re);
  })
  .post('/setMiddle', async (req,res)=>{
    if (!req.isAuthenticated()) res.status(401).json({message : "User Not Authed!"});
    var user = await Users.findOne({token : req.user.token})
    if(!user) return res.status(404).json({message : "User Not Found!"})
    var order = req.body.order;
    var mandal = user.middleMandalArt[order];
    mandal.middleTitle = req.body.title;
    var result = await Users.update({token : user.token}, {$pull : {middleMandalArt : {order : order}}})
    if(!result.ok) return res.status(500).json({message : "ERR!"})
    var result = await Users.update({token : user.token}, {$push : {middleMandalArt : mandal}})
    if(!result.ok) return res.status(500).json({message : "ERR!"})
    result = await Users.update({token : user.token},{
      $push : {middleMandalArt:
        {$each : [],
        $sort : {order : 1}}
      }
    })
    if(!result.ok) return res.status(500).json({message : "ERR!"})
    result = await Users.findOne({token : req.user.token});
    var re = {
      title : result.userMandalArt.title,
      achievement :  result.userMandalArt.achievement,
      mandal : result.middleMandalArt
    }
    return res.status(200).json(result)
  })
  .post('/setLow', async (req,res)=>{
    if (!req.isAuthenticated()) res.status(401).json({message : "User Not Authed!"});
    var user = await Users.findOne({token : req.user.token})
    if(!user) return res.status(404).json({message : "User Not Found!"})
    var result = await Users.update({token : user.token}, {$pull : {middleMandalArt : {order : req.body.middle - 1}}})
    if(!result.ok) return res.status(500).json({message : "ERR!"})
    var mandal = user.middleMandalArt[req.body.middle - 1];
    switch (req.body.low) {
      case 1:
        mandal.smallMandalArt1.title = req.body.title;
        break;
      case 2:
        mandal.smallMandalArt2.title = req.body.title;
        break;
      case 3:
        mandal.smallMandalArt3.title = req.body.title;
        break;
      case 4:
        mandal.smallMandalArt4.title = req.body.title;
        break;
      case 5:
        mandal.smallMandalArt5.title = req.body.title;
        break;
      case 6:
        mandal.smallMandalArt6.title = req.body.title;
        break;
      case 7:
        mandal.smallMandalArt7.title = req.body.title;
        break;
      case 8:
        mandal.smallMandalArt8.title = req.body.title;
        break;
      default:
        return res.status(400).json({message : "params ERR!"})
        break;
    }
    result = await Users.update({token : user.token}, {$push : {middleMandalArt : mandal}})
    if(!result.ok) return res.status(500).json({message : "ERR!"})
    result = await Users.update({token : user.token},{
      $push : {middleMandalArt:
        {$each : [],
        $sort : {order : 1}}
      }
    })
    res.status(200).json({message : "success!"})
  })
  .post('/setMiddle/app', async(req,res)=>{
    var user = await Users.findOne({token : req.body.token})
    if(!user) return res.status(404).json({message : "User Not Found!"})
    var order = req.body.order;
    var mandal = user.middleMandalArt[order];
    mandal.middleTitle = req.body.title;
    var result = await Users.update({token : user.token}, {$pull : {middleMandalArt : {order : order}}})
    if(!result.ok) return res.status(500).json({message : "ERR!"})
    var result = await Users.update({token : user.token}, {$push : {middleMandalArt : mandal}})
    if(!result.ok) return res.status(500).json({message : "ERR!"})
    result = await Users.update({token : user.token},{
      $push : {middleMandalArt:
        {$each : [],
        $sort : {order : 1}}
      }
    })
    if(!result.ok) return res.status(500).json({message : "ERR!"})
    result = await Users.findOne({token : req.body.token});
    var re = {
      title : result.userMandalArt.title,
      achievement :  result.userMandalArt.achievement,
      mandal : result.middleMandalArt
    }
    return res.status(200).json(re)
  })
  .post('/setLow/app', async(req,res)=>{
    var user = await Users.findOne({token : req.body.token})
    if(!user) return res.status(404).json({message : "User Not Found!"})
    var result = await Users.update({token : user.token}, {$pull : {middleMandalArt : {order : req.body.middle}}})
    if(!result.ok) return res.status(500).json({message : "ERR!"})
    var mandal = user.middleMandalArt[req.body.middle];
    switch (parseInt(req.body.low)) {
      case 0:
        mandal.smallMandalArt1.achievement = req.body.achievement;
        break;
      case 1:
        mandal.smallMandalArt2.achievement = req.body.achievement;
        break;
      case 2:
        mandal.smallMandalArt3.achievement = req.body.achievement;
        break;
      case 3:
        mandal.smallMandalArt4.achievement = req.body.achievement;
        break;
      case 4:
        mandal.smallMandalArt5.achievement = req.body.achievement;
        break;
      case 5:
        mandal.smallMandalArt6.achievement = req.body.achievement;
        break;
      case 6:
        mandal.smallMandalArt7.achievement = req.body.achievement;
        break;
      case 7:
        mandal.smallMandalArt8.achievement = req.body.achievement;
        break;
      default:
        return res.status(400).json({message : "params ERR!"})
        break;
    }
    result = await Users.update({token : user.token}, {$push : {middleMandalArt : mandal}})
    if(!result.ok) return res.status(500).json({message : "ERR!"})
    result = await Users.update({token : user.token},{
      $push : {middleMandalArt:
        {$each : [],
        $sort : {order : 1}}
      }
    })
    mandal = await Users.findOne({token : user.token})
    mandal = mandal.middleMandalArt
    var ac = 0;
    for(var i = 0; i < 8; i ++){
      var sum = 0;
      var cnt = 0;
      sum += mandal[i].smallMandalArt1.achievement
      if( mandal[i].smallMandalArt1.achievement >= 50) cnt = cnt + 1
      sum += mandal[i].smallMandalArt2.achievement
      if( mandal[i].smallMandalArt2.achievement >= 50) cnt = cnt + 1
      sum += mandal[i].smallMandalArt3.achievement
      if( mandal[i].smallMandalArt3.achievement >= 50) cnt = cnt + 1
      sum += mandal[i].smallMandalArt4.achievement
      if( mandal[i].smallMandalArt4.achievement >= 50) cnt = cnt + 1
      sum += mandal[i].smallMandalArt5.achievement
      if( mandal[i].smallMandalArt5.achievement >= 50) cnt = cnt + 1
      sum += mandal[i].smallMandalArt6.achievement
      if( mandal[i].smallMandalArt6.achievement >= 50) cnt = cnt + 1
      sum += mandal[i].smallMandalArt7.achievement
      if( mandal[i].smallMandalArt7.achievement >= 50) cnt = cnt + 1
      sum += mandal[i].smallMandalArt8.achievement
      if( mandal[i].smallMandalArt8.achievement >= 50) cnt = cnt + 1
      sum *= 0.015;
      sum += cnt * 0.0625;
      ac += sum;
    }
    var setAchiv = user.userMandalArt
    setAchiv.achievement = ac;
    result = await Users.update({token : user.token}, {$set : {userMandalArt : setAchiv}})
    if(!result.ok) return res.status(500).json({message : "ERR!"})
    res.status(200).json({achievement : ac})
  })
}

// {
//   "middle" : [
//     {
//       "small" : ["센","치","","","","","",""],
//       "title":"십"
//     },
//     {
//       "small" : ["소","지","섭","","","","",""],
//       "title":"란"
//     },
//     {
//       "small" : ["밤","캐스퍼","라디오","","","","",""],
//       "title" : "한"
//     },
//     {
//       "small" : ["밤","캐스퍼","라디오","","","","",""],
//       "title" : "한"
//     },
//     {
//       "small" : ["밤","캐스퍼","라디오","","","","",""],
//       "title" : "한"
//     },
//     {
//       "small" : ["밤","캐스퍼","라디오","","","","",""],
//       "title" : "한"
//     },
//     {
//       "small" : ["밤","캐스퍼","라디오","","","","",""],
//       "title" : "한"
//     },
//     {
//       "small" : ["밤","캐스퍼","라디오","","","","",""],
//       "title" : "한"
//     }
//   ],
//   "title":"십란",
//   "token":"z0NuWp9Es4OToxw9vuKnmDCic"
// }
