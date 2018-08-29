function arrow(){
  var title = $('.inputMandalTitle').val();
  if(!title)
    alert('제목을 입력해주세요!');
  else location.replace('/make2');
}