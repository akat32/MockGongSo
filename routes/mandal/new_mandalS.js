module.exports = new_mandalS;

function new_mandalS(app, passport, Users, rndstring){
  app.post('/makeBtn', async (req,res)=>{
    if (req.isAuthenticated()) res.status(200).json({message : "authed!"})
    else res.status(401).json({message : "User Not authed!"})
  })
  .post('/make', async (req,res)=>{
    var mandal = {
      title : req.body.title,
    }
    var result = await Users.update({token : req.user.token}, {$set : {userMandalArt : mandal}});
    if(!result) return res.status(500).json({message : "update err!"});
    result = await Users.update({token : req.user.token}, {$set : {MandalChk : true}})
    if(!result) return res.status(500).json({message : "update err!"});
    res.status(200).json({message : "success!"});
  })
  .get('/mandal',async(req,res)=>{
    var result = await Users.findOne({token : req.user.token});
    if(result.MandalChk) res.render('mandal.html')
    else res.render('Square_mandal.html')
  })
  .get('/mandals',(req,res)=>{
    res.render('mandal.html');
  })
  .post('/make/app', async (req,res)=>{
    console.log(req.body.middle[0].small);
    var mandal = {
      title : req.body.title,
    }
    var result = await Users.update({token : req.body.token},{$set : {MandalChk : true}})
    if(!result.ok) return res.status(500).json({message : "ERR!"})
    result = await Users.update({token : req.body.token}, {$set : {userMandalArt : mandal}});
    if(!result.ok) return res.status(500).json({message : "ERR!"})
    mandal = {};
    for(var i = 0; req.body.middle[i] != null; i++){
      mandal = {
        order : i,
        middleTitle : req.body.middle[i].title,
        smallMandalArt1 : {
          title : req.body.middle[i].small[0]
        },
        smallMandalArt2 : {
          title : req.body.middle[i].small[1]
        },
        smallMandalArt3 : {
          title : req.body.middle[i].small[2]
        },
        smallMandalArt4 : {
          title : req.body.middle[i].small[3]
        },
        smallMandalArt5 : {
          title : req.body.middle[i].small[4]
        },
        smallMandalArt6 : {
          title : req.body.middle[i].small[5]
        },
        smallMandalArt7 : {
          title : req.body.middle[i].small[6]
        },
        smallMandalArt8 : {
          title : req.body.middle[i].small[7]
        }
      }
      console.log(mandal)
      var some  = await Users.update({token : req.body.token}, {$pull : {middleMandalArt : {order : i}}})
      if(!some.ok) return res.status(500).json({message : "ERR!"});
      some = await Users.update(
        {"token" : req.body.token},
        {$push : {middleMandalArt : mandal}
      });
      if(!some.ok) return res.status(500).json({message : "ERR!"});
    }
    result = await Users.update({token : req.body.token},{
      $push : {middleMandalArt:
        {$each : [],
        $sort : {order : 1}}
      }
    })
    if(!result.ok) return res.status(500).json({message : "ERR!"})
    // result = await Users.update({token : req.body.token}, {$set : {}})
    res.status(200).json({json : req.body.title});
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
//     }
//   ],
//   "title":"십란",
//   "token":"HIcJtIL9AsGhCrdjMqlBLTK3A"
// }
