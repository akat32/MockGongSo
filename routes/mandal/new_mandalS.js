module.exports = new_mandalS;

function new_mandalS(app, passport, Users, rndstring){
  app.post('/make', async (req,res)=>{
    var token = req.user;
    console.log(token)
    res.status(200).json(token)
  })
  .get('/mandal',(req,res)=>{
    if(req.user.MandalChk) res.render('mandal.html')
    else res.render('Square_mandal.html')
  })
}
