import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/MockSal');
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () { console.log("Mongo On"); });

var UsersSchema = mongoose.Schema({
  id : {type : String, unique : true}, // 유저 아이디
  passwd : {type : String}, // 유저 비밀번호
  name : {type : String}, // 유저 이름
  email : {type : String}, // 유저 이메일
  token : {type : String}, // 소셜 로그인 시 사용될 토큰 혹은 자동로그인.
  pushNotifications : [{  // 푸쉬 알림
    time : {type : Date}
  }],
  mandalArtTheme : [{  // 보유한 만다라트 테마
    themaCode : {type : String} // 테마 코드 (랜덤스트링)
  }],
  userMandalArt : { //유저 만다라트
    name : {type : String}, // 만다라트 이름
    goal : {type : String}, // 만다라트 목표
    mostWork : {type : String}, // 가장 많이 한 항목
    achievement : {type : Number, default : 0}, // 성취도
    startDay : {type : Date}, //시작일
    endDay : {type : Date}, // 종료일
    isEnd : {type : Boolean, default : false}, // 이거 종료됨?
    themaCode : {type : String, default : "base"}, // 테마
    userDiary : [{ // 유저 일기
      title : {type : String, default : "제목"}, // 일기 제목
      date : {type : Date}, // 일기 쓴 날짜
      diary : {type : String} // 일기
    }],
    mandalLog : [{
      date : {type : Date}, // 로그 찍힌 날짜
      index : {type : String} // 내용
    }],
    middleMandalArt : [{ // 3 * 3 칸 짜리 만다라트 칸
      middleTitle : {type : String}, // 중간 칸 목표
      achievement : {type : Number, default : 0}, // 성취도
      smallMandalArt : [{ // 9 * 9 칸 짜리 작은 만다라트 칸
        title : {type : String}, // 작은 칸 목표
        achievement : {type : Number, default : 0} // 성취도
      }]
    }]
  },
  triangleMandalArt : { // 삼각형 만다라트
    name : {type : String}, // 만다라트 이름
    goal : {type : String}, // 만다라트 목표
    isEnd : {type : String}, // 이거 끝남?
    achievement : {type : Number, default : 0},
    themaCode : {type : String, default : "base"}, //테마 코드
    middleMandalArt : [{ // 중간 크기 만다라트
      middleTitle : {type : String}, // 중간 칸 목표
      achievement : {type : Number, default : 0}, // 중간 칸 성취도
      smallMandalArt : [{ // 작은 칸
        title : {type : String}, // 작은 칸 목표
        achievement : {type : Number, default : 0} //작은 칸 성취도
      }]
    }]
  },
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
