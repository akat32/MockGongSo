function back(){
  location.replace('/make1');
}
function go(){
  location.replace('/make3');
}
window.onload = ()=>{
  var wList = new Vue({
    el: '#wishList',
    data: {
      items: [
        {message : "화해하기"}
      ]
    }
  })
  var addBtn = new Vue({
    el: '.plus',
    methods: {
      add : ()=>{
        console.log('1')
      }
    }

  })
}
