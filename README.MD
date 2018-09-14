# MockGongso Backend & Mobile Web
2018 STAC 생활부문

## API Document

* POST /signup : User Signup (유저 회원가입)

> Params

    name  : User's Name ( 유저 이름 )

    email : User's E-mail ( 유저 이메일 )

    passwd : User's Password ( 유저 비밀번호 )

> Response

    HTTP 200 : {message : "Success!"}

    HTTP 400 : {message : e.message} ( String 반환 )

    HTTP 409 : {message : "already exist"} (유저 중복)


* POST /signin : User Signin (유저 로그인)

> Params

    email : Us  er's E-mail ( 유저 이메일 )

    passwd : User's Password ( 유저 비밀번호 )

> Response

    HTTP 200 : { data :
      {
        token : User's token,
        name : User's name,
        startDay : MandalArt startDay
      }
    }

    HTTP 404 : {message : "User Not Found"}


* POST /duplicatechk : User Signin (유저 로그인)

> Params

    email : User's email ( 유저 이메일 )

> Response

    HTTP 200 : {message : "Not duplicate"}

    HTTP 409 : {message : "User duplicate"}

* POST /getMandal/app : Get User's Main MandalArt ( 만다라트 가져오기 + 유무 )

> Params

    token : User's token ( 유저 토큰 )

> Response

    HTTP 200 : re = {
      title : result.userMandalArt.title, (제목)
      achievement :  result.userMandalArt.achievement, (성취도)
      mandal : result.middleMandalArt ( 배열 )
    }

    HTTP 401 : {message : "Not Found!"}

    HTTP 404 : {message : "Mandal Not Found!"}

* POST /setMiddle/app : Middle MandalArt ( 2단계 만다라트 수정 )

> Params

    token : User's token ( 유저 토큰 )

    order : Array Number ( 만다라트 배열 번호 )

    title : Middle MandalArt Title ( 2단계 만다라트 목표 )

> Response

    HTTP 200 : re = {
        title : result.userMandalArt.title, (제목)
        achievement :  result.userMandalArt.achievement, (성취도)
        mandal : result.middleMandalArt ( 배열 )
    }

    HTTP 404 : {message : "User Not Found!"}

    HTTP 500 : {message : "ERR!"}

* POST /setLow/app : Low MandalArt ( 3단계 만다라트 achievement 수정 )

> Params

    token : User's token ( 유저 토큰 )

    middle : Middle Array Num ( 2단계 만다라트의 배열 번호 )

    low : Low Array Num ( 3단계 만다라트의 배열 번호)

    achievement : Low MandalArt achievement ( 3단계 만다라트 달성 수치 )

> Response

    HTTP 200 : {message : "success!"}

    HTTP 404 {message : "User Not Found!"}

    HTTP 500 {message : "ERR!"}

* POST /addDay/app : add MandalArt Start Day ( 만다라트 시작일 지정 )

> Params

    token : User's token ( 유저 토큰 )

    startDay : ex) "2018-09-12"

> Response

    HTTP 200 : {message : "success!"}

    HTTP 500 {message : "ERR!"}

* POST /tmake/app : Small MandalArt ( 작은 만다라트 만들기 )

> Params

    token : User's token ( 유저 토큰 )

    title : Small MandalArt's Title ( 작은 만다라트 제목 )

    startDay : Start Day ( 만다라트 시작일 )

    middle : Array of MandalArt ( 만다라트 배열 )

    ex)
    "middle" : [
      {
        "small" : ["센","치",""],
        "title":"십"
      },
      {
        "small" : ["소","지","섭"],
        "title":"란"
      },
      {
        "small" : ["밤","캐스퍼","라디오"],
        "title" : "한"
      }
    ]

> Response

    HTTP 200 : {message : "success!"}

    HTTP 500 : {message : "ERR!"}

* POST /getTMandalChk/app : Get User's Small MandalArt ( 작은 만다라트 가져오기 + 유무 )

> Params

    token : User's token ( 유저 토큰 )

> Response

    HTTP 200 : re = {
      title : result.userMandalArt.title, (제목)
      achievement :  result.userMandalArt.achievement, (성취도)
      mandal : result.middleMandalArt ( 배열 )
    }

    HTTP 401 : {message : "Not Found!"}

    HTTP 404 : {message : "Mandal Not Found!"}

* POST /delMain/app : delete Main MAndalArt ( 메인 만다라트 삭제 )

> Params

    token : User's token ( 유저 토큰 )

> Response

    HTTP 200 : {message : "success!"}

    HTTP 500 : {message : "ERR!"}

* POST /delSub/app : delete Sub MAndalArt ( 작은 만다라트 삭제 )

> Params

    token : User's token ( 유저 토큰 )

> Response

    HTTP 200 : {message : "success!"}

    HTTP 500 : {message : "ERR!"}

* POST /Tset/app : Modify Sub MandalArt ( 작은 만다라트 수정 )

> Params

    ex)
    {
      "middle" : [
        {
          "small" : ["센","치",""],
          "title":"오십"
        },
        {
          "small" : ["소","지","섭"],
          "title":"란"
        },
        {
          "small" : ["밤","캐스퍼","라디오"],
          "title" : "한"
        }
      ],
      "title":"십란",
      "token":"T4x831oUCFlXcYqAWsQZvfDnb",
      "startDay":"2018-06-23"
    }

> Reponse

    HTTP 200 : {message : "success!"}

    HTTP 500 : {message : "ERR!"}

* POST /addDiary/app : Add New Diary ( 유저 일기 추가 )

> Params

    token : User's token ( 유저 토큰 )

    date : Diary's date ( 일기 날짜 )

    index : Diary's index ( 일기 내용 )

> Response

    HTTP 200 : {message : "success!"}

    HTTP 500 : {message : "ERR!"}n

* POST /getDiary/app : Get User Diary ( 유저 일기 가져오기 )

> Params

    token : User's token ( 유저 토큰 )

> Response

    HTTP 200 : ex)

    {
      "re": [
          {
              "date": "2018-06-01",
              "diary": [
                  {
                      "index": "아니이런.. 젠장 쉬이펄"
                  },
                  {
                      "index": "아니이런.. 젠장 쉬이펄"
                  },
                  {
                      "index": "아니이런.. 젠장 쉬이펄"
                  }
              ]
          },
          {
              "date": "2018-06-16",
              "diary": [
                  {
                      "index": "아니이런.."
                  },
                  {
                      "index": "아니이런.. 젠장"
                  },
                  {
                      "index": "아니이런.. 젠장 쉬이펄"
                  }
              ]
          },
          {
              "date": "2018-06-18",
              "diary": [
                  {
                      "index": "아니이런.. 젠장 쉬이펄"
                  },
                  {
                      "index": "아니이런.. 젠장 쉬이펄"
                  },
                  {
                      "index": "아니이런.. 젠장 쉬이펄"
                  }
              ]
          }
       ]
    }

    HTTP 404 : {message : "User Not Found!"}

    HTTP 500 : {message : "ERR!"}

* POST /delDiary/app : Delete JUser Diary ( 유저 일기 지우기 )

> Params

    token : User's token ( 유저 토큰 )

    diaryToken : Diary's token Array ( 일기 토큰 {문자열 배열 ["som","e"]})

> Response

    HTTP 200 : {message : "success!"}

    HTTP 500 : {message : "ERR!"}
