
async function login(){
  var userEmail = $('.email').val();
  var userPasswd = $('.passwd').val();
  var result = await axios.post('/signinWeb', {
    email : userEmail,
    passwd : userPasswd
  })
  if(result.status != 200)
    alert('아이디나 비밀번호를 확인하세요')
  else{
    result = await axios.post('/getMandal', {
      some : "thing"
    })
    localStorage.setItem('mandal', JSON.stringify(result))
    var mandal = JSON.parse(localStorage.getItem('mandal'))
    console.log(mandal.data)
    location.replace('/mandal');
  }
}
