npm i -g @nestjs/cli
https://docs.nestjs.com/cli/usages
nest g mo auths
nest g co
nest g mi // 미들웨어만들기
nest g gu // 가드만들기

controller: request / response 처리
provider: business logic 처리

dto
dto(data transfer object)로 network에서 data가 어떤 형태로 전달되는지 정의하는 객체입니다.
https://docs.nestjs.com/controllers#request-payloads

request 다루기
https://docs.nestjs.com/controllers#request-object

@Injenctable을 통해 해당 class가 nestjs ioc container에 관리(di)될 수 있습니다.

미들웨어 -> 가드 -> 인터셉터/파이프

의존성주입되는건 provider들...
