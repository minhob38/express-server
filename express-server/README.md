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

## Test Code

### • unit test

jest 기반 test 환경입니다.

### • integration test

supertest 기반 test 환경입니다.

<!-- ### nodejs server

nodejs는 javascript를 처리하는 eventloop가 single thread로 작동하며, 비동기 i/o 작업은 libuv에서 thread pool에 있는 multi thread로 처리합니다. 많은 thread를 가지지 않기에 context switching이 적고, thread가 적어 메모리를 덜 먹기때문에 cpu의 성능을 높일 수 있기에 multi thread에 비해 성능이 좋습니다. 따라서 nodejs는 가벼운 http 요청/응답을 처리함과 동시에 무거운 비동기 i/o를 동시에 처리할 수 있습니다. 반대로 무거운 http 요청/응답이라면 single thread이기에 서버가 느려질 수 있습니다.
(비동기 i/o가 많으면 multi thread와 마찬가지로 느려집니다.)

multi-thread / single-thread 비교

- single core +
  single thread + worker thread (4)
  요청 a, b, c, d
  a, b, c, d (처리중)
  e, f, g (요청은 들어감)
  -> nodejs는 많은 요청을 처리할 수 있음
  -> nodejs는 비동기 i/o를 libuv에서 처리하기 때문에, 서버자체 성능은 떨어지지 않음 (서버자체는 single thread로 이벤트루프가 실행시킴)
  -> 즉 nodejs는 cpu 연산이 적은 많은 요청과, 비동기 i/o처리가 많을때 좋습니다.

multu thread
요청 a, b, c, d
a, b, c, d (처리중)
e, f, g (대기중) 


thread는 임의의 cpu가 번갈아서 처리할 수도 있음. 따라서 싱글쓰레드면 코어가 많아도 하나의 코어만 일을함, 하지만 멀티쓰레드는 쓰레드가 4개일때 4코어이면 각각 코어가 쓰레드를 하나씩 맡게됨
-->


