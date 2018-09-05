function goUP(){
  location.replace('/downmandal')
}


window.onload = async ()=>{
  var mandalTitle = new Vue({
    el: '.mandalTitle',
    data : {
      title : '',
      subTitle : ''
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
  if(localStorage.getItem('lowNum') == 1)
  var mandal = result.data.re.mandal[localStorage.getItem('middleNum')-1].smallMandalArt1;
  if(localStorage.getItem('lowNum') == 2)
  var mandal = result.data.re.mandal[localStorage.getItem('middleNum')-1].smallMandalArt2;
  if(localStorage.getItem('lowNum') == 3)
  var mandal = result.data.re.mandal[localStorage.getItem('middleNum')-1].smallMandalArt3;
  if(localStorage.getItem('lowNum') == 4)
  var mandal = result.data.re.mandal[localStorage.getItem('middleNum')-1].smallMandalArt4;
  if(localStorage.getItem('lowNum') == 5)
  var mandal = result.data.re.mandal[localStorage.getItem('middleNum')-1].smallMandalArt5;
  if(localStorage.getItem('lowNum') == 6)
  var mandal = result.data.re.mandal[localStorage.getItem('middleNum')-1].smallMandalArt6;
  if(localStorage.getItem('lowNum') == 7)
  var mandal = result.data.re.mandal[localStorage.getItem('middleNum')-1].smallMandalArt7;
  if(localStorage.getItem('lowNum') == 8)
  var mandal = result.data.re.mandal[localStorage.getItem('middleNum')-1].smallMandalArt8;
  mandalTitle.title = result.data.re.mandal[localStorage.getItem('middleNum')-1].middleTitle;
  mandalTitle.subTitle = mandal.title;
}
