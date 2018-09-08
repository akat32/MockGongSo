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
        {message : "다리 운동하기"},
        {message : "어깨 운동하기"},
        {message : "배 운동하기"},
      ]
    }
  })
  var addBtn = new Vue({
    el: '.plus',
    methods: {
      add : ()=>{
        console.log(localStorage.getItem('mandalTitle'))
      }
    }
  })
}
