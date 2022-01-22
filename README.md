# Express Server

기본적인 구조를 갖춘 express server입니다.

## API

본서버는 인증 API `api/auth`, 게시판 API `api/board`, 지도 API `api/map`으로 이루어져 있습니다.

### • auth api

### • board api

### • map api

<!-- ### • store api

file 저장 api -->

### 📔 API Document

api 요청/응답은 swagger를 기반으로 문서화되어 있습니다.

## Database

본서버는 database로 postgresql(+postgis)를 사용합니다.

## CI / CD

ithub에서 jenkins에 webhook을 보내면 Jenkinsfile에 정의한 pipeline에 따라 아래와 같은 흐름으로 CI/CD가 진행됩니다.

- express-server에서 만든 Dockerfile에 따라 도커이미지를 build합니다.
- 만들어진 이미지를 dockerhub에 push합니다.

  github → docker → jenkins
