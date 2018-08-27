
function login(){
  var userId = $('.id').val();
  var userPasswd = $('.passwd').val();
  axios.post('/signinWeb', {
    id : userId,
    passwd : userPasswd
  })
  .then((response)=>{
    console.log(response.message)
  })
  .catch((err)=>{
    console.log(err.message)
  })
}
