function goUP(){
  localStorage.setItem('middleNum', 0);
  location.replace('/mandal')
}

window.onload = async ()=>{
  var mandal = new Vue({
    el: '.titleIndex',
    data:{
      title : ''
    }
  })
  var result = await axios.post('/getMandal', {some : "thing"})
  if(result.status == 404){
    alert('오류입니다!')
    location.replace('/login');
  }
  else if(result.status == 401){
    alert('세션이 만료되었습니다.')
    location.replace('/login');
  }
  var mandalNum = localStorage.getItem('middleNum');
  mandalNum = parseInt(mandalNum)
  // console.log(result.data.re.mandal[mandalNum-1].middleTitle);
  mandal.title = result.data.re.mandal[mandalNum-1].middleTitle;
}
