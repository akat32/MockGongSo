async function make(){
  var result = JSON.parse(localStorage.getItem('mandal'))
  if(result.status == 200) location.replace('/make1');
  else location.replace('/login');
}
