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
      goDown : (event)=>{
        alert('헤헷')
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
      goDown : (event)=>{
        alert('헤헷')
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
      goDown : (event)=>{
        alert('헤헷')
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
      goDown : (event)=>{
        alert('헤헷')
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
      goDown : (event)=>{
        alert('헤헷')
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
      goDown : (event)=>{
        alert('헤헷')
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
      goDown : (event)=>{
        alert('헤헷')
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
      goDown : (event)=>{
        alert('헤헷')
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
    mandal1.title = result.data.re.mandal[0].middleTitle;
    if(result.data.re.mandal[0].middleTitle != '') mandal1.isActive = true;
    mandal2.title = result.data.re.mandal[1].middleTitle;
    if(result.data.re.mandal[1].middleTitle != '') mandal2.isActive = true;
    mandal3.title = result.data.re.mandal[2].middleTitle;
    if(result.data.re.mandal[2].middleTitle != '') mandal3.isActive = true;
    mandal4.title = result.data.re.mandal[3].middleTitle;
    if(result.data.re.mandal[3].middleTitle != '') mandal4.isActive = true;
    mandal5.title = result.data.re.mandal[4].middleTitle;
    if(result.data.re.mandal[4].middleTitle != '') mandal5.isActive = true;
    mandal6.title = result.data.re.mandal[5].middleTitle;
    if(result.data.re.mandal[5].middleTitle != '') mandal6.isActive = true;
    mandal7.title = result.data.re.mandal[6].middleTitle;
    if(result.data.re.mandal[6].middleTitle != '') mandal7.isActive = true;
    mandal8.title = result.data.re.mandal[7].middleTitle;
    if(result.data.re.mandal[7].middleTitle != '') mandal8.isActive = true;
    mandalTitle.title = result.data.re.title;
    mandalTitle.achievement = result.data.re.achievement;
  }
}
