
function register(){
  var userName = $('.name').val();
  var userEmail = $('.email').val();
  var userPasswd = $('.passwd').val();
  var CPasswd = $('.confirmPasswd').val();
  if(userPasswd != CPasswd){
    alert('비밀번호가 맞지 않습니다!')
    return false;
  }
  axios.post('/signup', {
    name : userName,
    email : userEmail,
    passwd : userPasswd
  })
  .then((response)=>{
    location.replace('/login');
  })
  .catch((err)=>{
    alert('오류 발생!');
  })
}
