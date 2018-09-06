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
  var Box1 = new Vue({
    el: '.Box1',
    data : {
      isActive : false,
      isClick : false
    }
  })
  var Box2 = new Vue({
    el: '.Box2',
    data : {
      isActive : false,
      isClick : false
    }
  })
  var Box3 = new Vue({
    el: '.Box3',
    data : {
      isActive : false,
      isClick : false
    }
  })
  var Box4 = new Vue({
    el: '.Box4',
    data : {
      isActive : false,
      isClick : false
    }
  })
  var Box5 = new Vue({
    el: '.Box6',
    data : {
      isActive : false,
      isClick : false
    }
  })
  var Box6 = new Vue({
    el: '.Box7',
    data : {
      isActive : false,
      isClick : false
    }
  })
  var Box7 = new Vue({
    el: '.Box8',
    data : {
      isActive : false,
      isClick : false
    }
  })
  var Box8 = new Vue({
    el: '.Box9',
    data : {
      isActive : false,
      isClick : false
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
  mandalTitle.subTitle = result.data.re.mandal[localStorage.getItem('middleNum')-1].middleTitle;
  mandalTitle.title = mandal.title;
  console.log(result.data.re.mandal[mandalNum-1].smallMandalArt5.title)
  if(result.data.re.mandal[mandalNum-1].smallMandalArt1.title != '') Box1.isActive = true;
  if(result.data.re.mandal[mandalNum-1].smallMandalArt2.title != '') Box2.isActive = true;
  if(result.data.re.mandal[mandalNum-1].smallMandalArt3.title != '') Box3.isActive = true;
  if(result.data.re.mandal[mandalNum-1].smallMandalArt4.title != '') Box4.isActive = true;
  if(result.data.re.mandal[mandalNum-1].smallMandalArt5.title != '') Box5.isActive = true;
  if(result.data.re.mandal[mandalNum-1].smallMandalArt6.title != '') Box6.isActive = true;
  if(result.data.re.mandal[mandalNum-1].smallMandalArt7.title != '') Box7.isActive = true;
  if(result.data.re.mandal[mandalNum-1].smallMandalArt8.title != '') Box8.isActive = true;
  if(localStorage.getItem('lowNum') == 1) Box1.isClick = true;
  else Box1.isClick = false;
  if(localStorage.getItem('lowNum') == 2) Box2.isClick = true;
  else Box2.isClick = false;
  if(localStorage.getItem('lowNum') == 3) Box3.isClick = true;
  else Box3.isClick = false;
  if(localStorage.getItem('lowNum') == 4) Box4.isClick = true;
  else Box4.isClick = false;
  if(localStorage.getItem('lowNum') == 5) Box5.isClick = true;
  else Box5.isClick = false;
  if(localStorage.getItem('lowNum') == 6) Box6.isClick = true;
  else Box6.isClick = false;
  if(localStorage.getItem('lowNum') == 7) Box7.isClick = true;
  else Box7.isClick = false;
  if(localStorage.getItem('lowNum') == 8) Box8.isClick = true;
  else Box8.isClick = false;
}
