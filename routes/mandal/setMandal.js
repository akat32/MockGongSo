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
    return res.status(200).json({message : "success!"});
  })
  .post('/set/app', async(req,res)=>{

  })
}

// { middle:
//    [ { small: [Array], title: '서브1' },
//      { small: [Array], title: '서브2' },
//      { small: [Array], title: '서브3' },
//      { small: [Array] },
//      { small: [Array] },
//      { small: [Array] },
//      { small: [Array] },
//      { small: [Array] } ],
//   title: '타이틀'
// }
