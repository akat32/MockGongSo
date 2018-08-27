
function login(){
  var userId = $('.id').val();
  var userPasswd = $('.passwd').val();
  axios.post('/signinWeb', {
    id : userId,
    passwd : userPasswd
  })
  .then((response)=>{
    location.replace('/');
  })
  .catch((err)=>{
    alert('아이디나 비밀번호를 확인하세요')
  })
}
