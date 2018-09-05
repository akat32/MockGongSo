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
        localStorage.setItem('lowNum', 2);
        location.replace('/lowestMandal')
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
        localStorage.setItem('lowNum', 3);
        location.replace('/lowestMandal')
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
        localStorage.setItem('lowNum', 4);
        location.replace('/lowestMandal')
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
        localStorage.setItem('lowNum', 5);
        location.replace('/lowestMandal')
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
        localStorage.setItem('lowNum', 6);
        location.replace('/lowestMandal')
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
        localStorage.setItem('lowNum', 7);
        location.replace('/lowestMandal')
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
        localStorage.setItem('lowNum', 8);
        location.replace('/lowestMandal')
      }
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
  // console.log(result.data.re.mandal[mandalNum-1].middleTitle);
  mandal.subTitle = result.data.re.mandal[mandalNum-1].middleTitle;
  mandal.title = result.data.re.title
}
