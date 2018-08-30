function arrow(){
  var title = $('.inputMandalTitle').val();
  if(!title)
    alert('제목을 입력해주세요!');
  else{
    localStorage.setItem('mandalTitle', title);
    location.replace('/make2');
  }
}
