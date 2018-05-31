var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/MockSal');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () { console.log("Mongo On"); });



var UsersSchema = mongoose.Schema({
  token : {type : String}, // 소셜 로그인 시 사용될 토큰
  pushNotifications : [{  // 푸쉬 알림
    time : {type : Date}
  }],
  name : {type : String}, // 유저 이름
  profileImage : {type : String}, // 프로필 사진
  userDiary : [{ // 유저 일기
    title : {type : String, default : "제목"}, // 일기 제목
    date : {type : Date}, // 일기 쓴 날짜
    diary : {type : String} // 일기
  }],
  mandalArtTheme : [{  // 만다라트 테마
    themaCode : {type : String} // 테마 코드 (랜덤스트링)
  }], 
  userMandalArt : [{ //유저 만다라트
    name : {type : String}, // 만다라트 이름
    goal : {type : String}, // 만다라트 목표
    mostWork : {type : String}, // 가장 많이 한 항목
    achievement : {type : Number, default : 0}, // 성취도
    shape : {type : String}, // 모양
    startDay : {type : Date}, //시작일
    isEnd : {type : Boolean, default : false}, // 이거 종료됨?
    endDay : {type : Date}, // 종료일
    themaCode : {type : String}, // 테마
    middleMandalArt : [{ // 3 * 3 칸 짜리 만다라트 칸
      middleTitle : {type : String}, // 중간 칸 목표
      achievement : {type : Number, default : 0}, // 성취도
      smallMandalArt : [{ // 9 * 9 칸 짜리 작은 만다라트 칸
        title : {type : String}, // 작은 칸 목표
        achievement : {type : Number, default : 0} // 성취도
      }]
    }]
  }],
  count : {type : Number, default : 0}, // 만다라트 갯수
  maximumCount : {type : Number, default : 3} // 만다라트 최대 갯수
});
Users = mongoose.model('users', UsersSchema);


require('./err')(UsersSchema);


exports.Users = Users;
exports.db = db;