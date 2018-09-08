function goUP(){
  localStorage.setItem('middleNum', 0);
  location.replace('/mandal')
}

window.onload = async ()=>{
  var mandal = new Vue({
    el: '.mandalTitle',
    data:{
      title : '',
      subTitle : ''
    }
  })
  var Box1 = new Vue({
    el: '.Box1',
    data : {
      isActive : false
    },
    methods : {
      goDown : async ()=>{
        if(Box1.isActive){
          localStorage.setItem('lowNum', 1);
          location.replace('/lowestMandal');
        }
        else {
          let ltitle = prompt("3단계 만다라트의 제목을 입력하세요!")
          if(ltitle === null || ltitle === '') alert('다시 입력해주세요!')
          else{
            let result = await axios.post('/setLow', {
              middle : localStorage.getItem('middleNum'),
              low : 1,
              title : ltitle
            })
            if(result.status == 200){
              localStorage.setItem('lowNum', 1);
              location.replace('/lowestMandal');
            }
            else alert('에러!')
          }
        }
      }
    }
  })
  var Box2 = new Vue({
    el: '.Box2',
    data : {
      isActive : false
    },
    methods : {
      goDown : async ()=>{
        if(Box2.isActive){
          localStorage.setItem('lowNum', 2);
          location.replace('/lowestMandal');
        }
        else {
          let ltitle = prompt("3단계 만다라트의 제목을 입력하세요!")
          if(ltitle === null || ltitle === '') alert('다시 입력해주세요!')
          else{
            let result = await axios.post('/setLow', {
              middle : localStorage.getItem('middleNum'),
              low : 2,
              title : ltitle
            })
            if(result.status == 200){
              localStorage.setItem('lowNum', 2);
              location.replace('/lowestMandal');
            }
            else alert('에러!')
          }
        }
      }
    }
  })
  var Box3 = new Vue({
    el: '.Box3',
    data : {
      isActive : false
    },
    methods : {
      goDown : async ()=>{
        if(Box3.isActive){
          localStorage.setItem('lowNum', 3);
          location.replace('/lowestMandal');
        }
        else {
          let ltitle = prompt("3단계 만다라트의 제목을 입력하세요!")
          if(ltitle === null || ltitle === '') alert('다시 입력해주세요!')
          else{
            let result = await axios.post('/setLow', {
              middle : localStorage.getItem('middleNum'),
              low : 3,
              title : ltitle
            })
            if(result.status == 200){
              localStorage.setItem('lowNum', 3);
              location.replace('/lowestMandal');
            }
            else alert('에러!')
          }
        }
      }
    }
  })
  var Box4 = new Vue({
    el: '.Box4',
    data : {
      isActive : false
    },
    methods : {
      goDown : async ()=>{
        if(Box4.isActive){
          localStorage.setItem('lowNum', 4);
          location.replace('/lowestMandal');
        }
        else {
          let ltitle = prompt("3단계 만다라트의 제목을 입력하세요!")
          if(ltitle === null || ltitle === '') alert('다시 입력해주세요!')
          else{
            let result = await axios.post('/setLow', {
              middle : localStorage.getItem('middleNum'),
              low : 4,
              title : ltitle
            })
            if(result.status == 200){
              localStorage.setItem('lowNum', 4);
              location.replace('/lowestMandal');
            }
            else alert('에러!')
          }
        }
      }
    }
  })
  var Box5 = new Vue({
    el: '.Box6',
    data : {
      isActive : false
    },
    methods : {
      goDown : async ()=>{
        if(Box5.isActive){
          localStorage.setItem('lowNum', 5);
          location.replace('/lowestMandal');
        }
        else {
          let ltitle = prompt("3단계 만다라트의 제목을 입력하세요!")
          if(ltitle === null || ltitle === '') alert('다시 입력해주세요!')
          else{
            let result = await axios.post('/setLow', {
              middle : localStorage.getItem('middleNum'),
              low : 5,
              title : ltitle
            })
            if(result.status == 200){
              localStorage.setItem('lowNum', 5);
              location.replace('/lowestMandal');
            }
            else alert('에러!')
          }
        }
      }
    }
  })
  var Box6 = new Vue({
    el: '.Box7',
    data : {
      isActive : false
    },
    methods : {
      goDown : async ()=>{
        if(Box6.isActive){
          localStorage.setItem('lowNum', 6);
          location.replace('/lowestMandal');
        }
        else {
          let ltitle = prompt("3단계 만다라트의 제목을 입력하세요!")
          if(ltitle === null || ltitle === '') alert('다시 입력해주세요!')
          else{
            let result = await axios.post('/setLow', {
              middle : localStorage.getItem('middleNum'),
              low : 6,
              title : ltitle
            })
            if(result.status == 200){
              localStorage.setItem('lowNum', 6);
              location.replace('/lowestMandal');
            }
            else alert('에러!')
          }
        }
      }
    }
  })
  var Box7 = new Vue({
    el: '.Box8',
    data : {
      isActive : false
    },
    methods : {
      goDown : async ()=>{
        if(Box7.isActive){
          localStorage.setItem('lowNum', 7);
          location.replace('/lowestMandal');
        }
        else {
          let ltitle = prompt("3단계 만다라트의 제목을 입력하세요!")
          if(ltitle === null || ltitle === '') alert('다시 입력해주세요!')
          else{
            let result = await axios.post('/setLow', {
              middle : localStorage.getItem('middleNum'),
              low : 7,
              title : ltitle
            })
            if(result.status == 200){
              localStorage.setItem('lowNum', 7);
              location.replace('/lowestMandal');
            }
            else alert('에러!')
          }
        }
      }
    }
  })
  var Box8 = new Vue({
    el: '.Box9',
    data : {
      isActive : false
    },
    methods : {
      goDown : async ()=>{
        if(Box8.isActive){
          localStorage.setItem('lowNum', 8);
          location.replace('/lowestMandal');
        }
        else {
          let ltitle = prompt("3단계 만다라트의 제목을 입력하세요!")
          if(ltitle === null || ltitle === '') alert('다시 입력해주세요!')
          else{
            let result = await axios.post('/setLow', {
              middle : localStorage.getItem('middleNum'),
              low : 8,
              title : ltitle
            })
            if(result.status == 200){
              localStorage.setItem('lowNum', 8);
              location.replace('/lowestMandal');
            }
            else alert('에러!')
          }
        }
      }
    }
  })
  var result = await axios.post('/getMandal', {some : "thing"})
  var mandal = JSON.parse(localStorage.getItem('mandal'))
  console.log(mandal)
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
  // console.log(result.data.re.mandal[mandalNum-1].middleTitle);
  mandal.title = result.data.re.mandal[mandalNum-1].middleTitle;
  mandal.subTitle = result.data.re.title
  if(result.data.re.mandal[mandalNum-1].smallMandalArt1.title != '') Box1.isActive = true;
  if(result.data.re.mandal[mandalNum-1].smallMandalArt2.title != '') Box2.isActive = true;
  if(result.data.re.mandal[mandalNum-1].smallMandalArt3.title != '') Box3.isActive = true;
  if(result.data.re.mandal[mandalNum-1].smallMandalArt4.title != '') Box4.isActive = true;
  if(result.data.re.mandal[mandalNum-1].smallMandalArt5.title != '') Box5.isActive = true;
  if(result.data.re.mandal[mandalNum-1].smallMandalArt6.title != '') Box6.isActive = true;
  if(result.data.re.mandal[mandalNum-1].smallMandalArt7.title != '') Box7.isActive = true;
  if(result.data.re.mandal[mandalNum-1].smallMandalArt8.title != '') Box8.isActive = true;
}
