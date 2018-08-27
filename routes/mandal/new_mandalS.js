module.exports = new_mandalS;

function new_mandalS(app, passport, Users, rndstring){
  app.post('/make', async (req,res)=>{
    var token = req.session.passport.user.token;
    console.log(token)
    res.status(200).json(token)
  })

}
