window.onload = async ()=>{
  var mandalTitle = new Vue({
    el: '.mandalTitle',
    data:{
      title : '',
      achievement : ''
    }
  })
  var mandal1 = new Vue({
    el: '.Box1',
    data:{
      isActive: false,
      title : ''
    },
    methods:{
      goDown : async (event)=>{
        if(mandal1.isActive){
          localStorage.setItem('middleNum', 1);
          location.replace('/downmandal');
          return;
        }
        let mtitle = prompt("2단계 만다라트의 제목을 입력하세요!")
        if(mtitle === null) alert('다시 입력해주세요!')
        else if(mtitle != ''){
          let result = await axios.post('/setMiddle', {
            title : mtitle,
            order : 0
          })
          if( result.status == 200){
            localStorage.setItem('middleNum', 1);
            location.replace('/downmandal');
          }
          else {
            alert('에러!')
          }
        }
        else
          alert('다시 입력해주세요!')
      }
    }
  })
  var mandal2 = new Vue({
    el: '.Box2',
    data:{
      isActive: false,
      title : ''
    },
    methods:{
      goDown : async (event)=>{
        if(mandal2.isActive){
          localStorage.setItem('middleNum', 2);
          location.replace('/downmandal');
          return;
        }
        let mtitle = prompt("2단계 만다라트의 제목을 입력하세요!")
        if(mtitle === null) alert('다시 입력해주세요!')
        else if(mtitle != ''){
          let result = await axios.post('/setMiddle', {
            title : mtitle,
            order : 1
          })
          if( result.status == 200){
            localStorage.setItem('middleNum', 2);
            location.replace('/downmandal');
          }
          else {
            alert('에러!')
          }
        }
        else
          alert('다시 입력해주세요!')
      }
    }
  })
  var mandal3 = new Vue({
    el: '.Box3',
    data:{
      isActive: false,
      title : ''
    },
    methods:{
      goDown : async (event)=>{
        if(mandal3.isActive){
          localStorage.setItem('middleNum', 3);
          location.replace('/downmandal');
          return;
        }
        let mtitle = prompt("2단계 만다라트의 제목을 입력하세요!")
        if(mtitle === null) alert('다시 입력해주세요!')
        else if(mtitle != ''){
          let result = await axios.post('/setMiddle', {
            title : mtitle,
            order : 2
          })
          if( result.status == 200){
            localStorage.setItem('middleNum', 3);
            location.replace('/downmandal');
          }
          else {
            alert('에러!')
          }
        }
        else
          alert('다시 입력해주세요!')
      }
    }
  })
  var mandal4 = new Vue({
    el: '.Box4',
    data:{
      isActive: false,
      title : ''
    },
    methods:{
      goDown : async (event)=>{
        if(mandal4.isActive){
          localStorage.setItem('middleNum', 4);
          location.replace('/downmandal');
          return;
        }
        let mtitle = prompt("2단계 만다라트의 제목을 입력하세요!")
        if(mtitle === null) alert('다시 입력해주세요!')
        else if(mtitle != ''){
          let result = await axios.post('/setMiddle', {
            title : mtitle,
            order : 3
          })
          if( result.status == 200){
            localStorage.setItem('middleNum', 4);
            location.replace('/downmandal');
          }
          else {
            alert('에러!')
          }
        }
        else
          alert('다시 입력해주세요!')
      }
    }
  })
  var mandal5 = new Vue({
    el: '.Box6',
    data:{
      isActive: false,
      title : ''
    },
    methods:{
      goDown : async (event)=>{
        if(mandal5.isActive){
          localStorage.setItem('middleNum', 5);
          location.replace('/downmandal');
          return;
        }
        let mtitle = prompt("2단계 만다라트의 제목을 입력하세요!")
        if(mtitle === null) alert('다시 입력해주세요!')
        else if(mtitle != ''){
          let result = await axios.post('/setMiddle', {
            title : mtitle,
            order : 4
          })
          if( result.status == 200){
            localStorage.setItem('middleNum', 5);
            location.replace('/downmandal');
          }
          else {
            alert('에러!')
          }
        }
        else
          alert('다시 입력해주세요!')
      }
    }
  })
  var mandal6 = new Vue({
    el: '.Box7',
    data:{
      isActive: false,
      title : ''
    },
    methods:{
      goDown : async (event)=>{
        if(mandal6.isActive){
          localStorage.setItem('middleNum', 6);
          location.replace('/downmandal');
          return;
        }
        let mtitle = prompt("2단계 만다라트의 제목을 입력하세요!")
        if(mtitle === null) alert('다시 입력해주세요!')
        else if(mtitle != ''){
          let result = await axios.post('/setMiddle', {
            title : mtitle,
            order : 5
          })
          if( result.status == 200){
            localStorage.setItem('middleNum', 6);
            location.replace('/downmandal');
          }
          else {
            alert('에러!')
          }
        }
        else
          alert('다시 입력해주세요!')
      }
    }
  })
  var mandal7 = new Vue({
    el: '.Box8',
    data:{
      isActive: false,
      title : ''
    },
    methods:{
      goDown : async (event)=>{
        if(mandal7.isActive){
          localStorage.setItem('middleNum', 7);
          location.replace('/downmandal');
          return;
        }
        let mtitle = prompt("2단계 만다라트의 제목을 입력하세요!")
        if(mtitle === null) alert('다시 입력해주세요!')
        else if(mtitle != ''){
          let result = await axios.post('/setMiddle', {
            title : mtitle,
            order : 6
          })
          if( result.status == 200){
            localStorage.setItem('middleNum', 7);
            location.replace('/downmandal');
          }
          else {
            alert('에러!')
          }
        }
        else
          alert('다시 입력해주세요!')
      }
    }
  })
  var mandal8 = new Vue({
    el: '.Box9',
    data:{
      isActive: false,
      title : ''
    },
    methods:{
      goDown : async (event)=>{
        if(mandal8.isActive){
          localStorage.setItem('middleNum', 8);
          location.replace('/downmandal');
          return;
        }
        let mtitle = prompt("2단계 만다라트의 제목을 입력하세요!")
        if(mtitle === null) alert('다시 입력해주세요!')
        else if(mtitle != ''){
          let result = await axios.post('/setMiddle', {
            title : mtitle,
            order : 7
          })
          if( result.status == 200){
            localStorage.setItem('middleNum', 8);
            location.replace('/downmandal');
          }
          else {
            alert('에러!')
          }
        }
        else
          alert('다시 입력해주세요!')
      }
    }
  })
  var result = await axios.post('/getMandal',{some : "thing"});
  // if(result.data.re.mandal[0].middleTitle === '')
  if(result.status == 404){
    alert('오류입니다!')
    location.replace('/login');
  }
  else if(result.status == 401){
    alert('세션이 만료되었습니다.')
    location.replace('/login');
  }
  else if(result.status == 200){
    mandalTitle.title = result.data.re.title;
    mandalTitle.achievement = result.data.re.achievement;
    if(result.data.re.mandal[0].middleTitle != '') mandal1.isActive = true;
    if(result.data.re.mandal[1].middleTitle != '') mandal2.isActive = true;
    if(result.data.re.mandal[2].middleTitle != '') mandal3.isActive = true;
    if(result.data.re.mandal[3].middleTitle != '') mandal4.isActive = true;
    if(result.data.re.mandal[4].middleTitle != '') mandal5.isActive = true;
    if(result.data.re.mandal[5].middleTitle != '') mandal6.isActive = true;
    if(result.data.re.mandal[6].middleTitle != '') mandal7.isActive = true;
    if(result.data.re.mandal[7].middleTitle != '') mandal8.isActive = true;
  }
}
