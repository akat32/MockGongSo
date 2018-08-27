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

    email : User's E-mail ( 유저 이메일 )

    passwd : User's Password ( 유저 비밀번호 )

> Response

    HTTP 200 : {message : "Success!"}

    HTTP 404 : {message : "User Not Found"}


* POST /duplicatechk : User Signin (유저 로그인)

> Params

    email : User's email ( 유저 이메일 )

> Response

    HTTP 200 : {message : "Not duplicate"}

    HTTP 409 : {message : "User duplicate"}
