import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/MockSal');
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () { console.log("Mongo On"); });

var UsersSchema = mongoose.Schema({
  email : {type : String, unique : true}, // 유저 이메일 [ID 로 취급]
  passwd : {type : String}, // 유저 비밀번호
  name : {type : String}, // 유저 이름
  token : {type : String}, // 소셜 로그인 시 사용될 토큰 혹은 자동로그인.
  pushNotifications : [{  // 푸쉬 알림
    time : {type : Date}
  }],
  mandalArtTheme : [{  // 보유한 만다라트 테마
    themaCode : {type : String} // 테마 코드 (랜덤스트링)
  }],
  MandalChk : {type : Boolean, default : false}, // 만다라트의 유무 체크
  userMandalArt : { //유저 만다라트
    title : {type : String}, // 만다라트 이름
    mostWork : {type : String, default : ""}, // 가장 많이 한 항목
    achievement : {type : Number, default : 0}, // 성취도
    startDay : {type : String, default : ""}, //시작일
    endDay : {type : String, default : ""}, // 종료일
    isEnd : {type : Boolean, default : false}, // 이거 종료됨?
    themaCode : {type : String, default : "base"} // 테마
  },
  middleMandalArt : [{ // 3 * 3 칸 짜리 만다라트 칸
    order : {type : Number}, // 배열 순서
    middleTitle : {type : String, default : ""}, // 중간 칸 목표
    achievement : {type : Number, default : 0}, // 성취도
    smallMandalArt1 : { // 9 * 9 칸 짜리 작은 만다라트 칸
      title : {type : String, default : ""}, // 작은 칸 목표
      achievement : {type : Number, default : 0} // 성취도
    },
    smallMandalArt2 : { // 9 * 9 칸 짜리 작은 만다라트 칸
      title : {type : String, default : ""}, // 작은 칸 목표
      achievement : {type : Number, default : 0} // 성취도
    },
    smallMandalArt3 : { // 9 * 9 칸 짜리 작은 만다라트 칸
      title : {type : String, default : ""}, // 작은 칸 목표
      achievement : {type : Number, default : 0} // 성취도
    },
    smallMandalArt4 : { // 9 * 9 칸 짜리 작은 만다라트 칸
      title : {type : String, default : ""}, // 작은 칸 목표
      achievement : {type : Number, default : 0} // 성취도
    },
    smallMandalArt5 : { // 9 * 9 칸 짜리 작은 만다라트 칸
      title : {type : String, default : ""}, // 작은 칸 목표
      achievement : {type : Number, default : 0} // 성취도
    },
    smallMandalArt6 : { // 9 * 9 칸 짜리 작은 만다라트 칸
      title : {type : String, default : ""}, // 작은 칸 목표
      achievement : {type : Number, default : 0} // 성취도
    },
    smallMandalArt7 : { // 9 * 9 칸 짜리 작은 만다라트 칸
      title : {type : String, default : ""}, // 작은 칸 목표
      achievement : {type : Number, default : 0} // 성취도
    },
    smallMandalArt8 : { // 9 * 9 칸 짜리 작은 만다라트 칸
      title : {type : String, default : ""}, // 작은 칸 목표
      achievement : {type : Number, default : 0} // 성취도
    }
  }],
  userDiary : [{ // 유저 일기
    date : {type : String}, // 일기 쓴 날짜
    index : {type : String}, // 일기
    token : {type : String}
  }],
  triangleMandalArt : { // 삼각형 만다라트
    triangleMandalChk : {type : Boolean, default : false}, // 심긱형 만다라트의 유무 체크
    title : {type : String, default : ""}, // 만다라트 이름
    isEnd : {type : Boolean, default : false}, // 이거 끝남?
    achievement : {type : Number, default : 0},
    themaCode : {type : String, default : "base"}, //테마 코드
    startDay : {type : String, default : ""}, //시작일
    endDay : {type : String, default : ""}, // 종료일
  },
  triangleMiddleMandalArt : [{ // 중간 크기 만다라트
    order : {type : Number},
    middleTitle : {type : String, default : ""}, // 중간 칸 목표
    achievement : {type : Number, default : 0}, // 중간 칸 성취도
    smallMandalArt1 : {
      title : {type : String, default : ""},
      achievement : {type : Number, default : 0}
    },
    smallMandalArt2 : {
      title : {type : String, default : ""},
      achievement : {type : Number, default : 0}
    },
    smallMandalArt3 : {
      title : {type : String, default : ""},
      achievement : {type : Number, default : 0}
    }
  }],
  targetAD : {
    name : {type : String}, // 광고 회사
    title : {type : String}, // 광고 제목
    img : {type : String}, // 광고 사진
    link : {type : String} // 광고 링크
  }
});

var ShopSchema = mongoose.Schema({
  thema : [{ // 테마
    code : {type : String}, // 테마 코드
  }],
  Advertising : [{ // 광고
    name : {type : String}, // 광고 회사
    title : {type : String}, // 광고 제목
    img : {type : String}, // 광고 사진
    link : {type : String} // 광고 링크
  }]
})


var Users = mongoose.model('users', UsersSchema);
var Shop = mongoose.model('shop', ShopSchema);

require('./err')(UsersSchema);

export {Users, Shop};

export default db;

// exports.Users = Users;
// exports.Shop = Shop;
