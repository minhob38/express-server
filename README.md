# Express Server

기본적인 구조를 갖춘 express server입니다.

## 환경설정

### • 설치

**\- 저장소 받기**  
받고싶은 경로에 github repository를 clone합니다.

```sh
$ git clone https://github.com/minhob38/express-server.git [받을 경로]
```

**\- package 설치하기**  
아래 스크립트를 실행하여 package들을 설치합니다.

```sh
$ npm install
```

### • 실행

**\- database 올리기**  
아래 스크립트로 database(postgresql)의 docker container를 올립니다.

```sh
$ npm run docker:db-up
```

**\- server 실행하기**  
아래 스크립트로 express server를 실행시킵니다. (port 8000에서 실행됩니다.)

```sh
$ npm start
```

## API

본서버는 인증 API `api/auth`, 게시판 API `api/board`, 지도 API `api/map`으로 이루어져 있습니다.

### • auth api

**\- 회원가입**  
**\- 로그인**  
**\- 회원탈퇴**  
**\- 비밀번호 변경**

### • board api

**\- 전체 게시글 조회**  
**\- 특정 게시글 조회**  
**\- 게시글 생성**  
**\- 게시글 수정**  
**\- 게시글 삭제**

### • map api

**\- 서울시 전체 구 조회**  
**\- 서울시 특정 경계안의 구 조회**  
**\- 서울시 너비순 구 조회**  
**\- 서울시 특정 구 조회**

<!-- ### • store api

file 저장 api -->

### 📔 API Document

api 요청/응답은 swagger를 기반으로 문서화되어 있습니다.

### 🔎 Logging

winston으로 api 요청들을 logging 합니다.

## Database

본서버는 database로 postgresql(+postgis)를 사용합니다.

## CI / CD

jenkins를 기반으로 ci/cd가 설정되어 있습니다.

<!-- ## Test Code -->
<!-- jest 기반 unit test -->
<!-- supertest 기반 int test -->
