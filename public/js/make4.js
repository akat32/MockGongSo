function back(){
  location.replace('/make3');
}
async function go(){
  var mandalTitle = localStorage.getItem('mandalTitle');
  console.log(mandalTitle)
  var result = await axios.post('/make', {
    title : mandalTitle
  })
  console.log(result);
  // location.replace('/mandal');
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
