function back(){
  location.replace('/make3');
}
function go(){
  location.replace('/mandal');
}
window.onload = ()=>{
  var wishList = new Vue({
    el: '#wishList',
    data: {
      items: [
        {message : "EDCAN 폐부"}
      ]
    }
  })
}

function addWish(){

}
