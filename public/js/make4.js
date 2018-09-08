function back(){
  location.replace('/make3');
}
async function go(){
  var mandalTitle = localStorage.getItem('mandalTitle');
  var result = await axios.post('/make', {
    title : mandalTitle
  })
  if(result.status == 500){
    alert('세션이 만료되었습니다.   ')
    location.replace('/login')
  }
  result = await axios.post('/set', {
    title : mandalTitle
  })
  if(result.status == 500){
    alert('세션이 만료되었습니다.')
    location.replace('/login')
  }
  else if (result.status==200){
    localStorage.setItem('mandal', JSON.stringify(result))
    location.replace('/mandal');
  }
}
window.onload = ()=>{
  var wishList = new Vue({
    el: '#wishList',
    data: {
      items: [
        {message : "스쿼트 50회"},
        {message : "브릿지 50회"}
      ]
    }
  })
}

function addWish(){

}
