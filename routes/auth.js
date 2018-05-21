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
  });
}