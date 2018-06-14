module.exports = auth;

function auth(app , randomstring, Users,  passport) {
  app.get('/auth/fb', function (req, res) {
    console.log("user token : " + req.query.token);
    var accessToken = req.query.token;
    if(accessToken){
      Users.find({"token": accessToken},(err,model)=>{
        if(err) throw err;
        if(model.length == 0){
          res.status(201).json({message : "User Not Found"});
        }
        else{
          console.log(model)
          res.status(200).json(200)(model[0]["token"]);
        }
      });
    }
    else res.send(401, "Can't find User On Facebook. It May Be Unusable.");
  })
  .post('/signup', async(req,res)=>{
    var user = new Users(req.body);
    console.log(req.body)
    var result = await user.save();
    if(!result.ok) return res.status(200).json(user);
    else return res.status(500).json({message : "fail!"})
  })
  .post('/signin', async(req,res)=>{
    var result = await Users.findOne(req.body);
    if(!result) return res.status(404).json({message : "User Not Found!"})
    else return res.status(200).json(result);
  })
  .post('/aa', async (req,res)=>{
    var result = await Users.find();
    res.send(result);
  })
}
