
function login(){
  var userEmail = $('.email').val();
  var userPasswd = $('.passwd').val();
  axios.post('/signinWeb', {
    email : userEmail,
    passwd : userPasswd
  })
  .then((response)=>{
    location.replace('/mandals');
  })
  .catch((err)=>{
    alert('아이디나 비밀번호를 확인하세요')
  })
}
