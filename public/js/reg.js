
function register(){
  var userName = $('.name').val();
  var userEmail = $('.email').val();
  var userId = $('.id').val();
  var userPasswd = $('.passwd').val();
  axios.post('/signup', {
    name : userName,
    email : userEmail,
    id : userId,
    passwd : userPasswd
  })
  .then((response)=>{
    console.log(response)
  })
  .catch((err)=>{
    console.log(err.message)
  })
}
