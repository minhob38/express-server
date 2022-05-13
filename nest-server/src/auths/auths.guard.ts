import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

/*
[guard]
- middleware는 path 기반으로 동작하기 때문에, 다음에 실행될 handler를 정확히 알기 힘듭니다.
- guard는 다음에 실행될 handler를 알고 있습니다. 따라서, guard가 붙은 hanlder를 처리하기 편리합니다.
- middleware는 authenication, guard는 authorization에 쓰입니다.
- execution-context는 argument-host를 상속받으며, 현재 실행 context의 정보(controller, handler)를 담고 있습니다.
- https://docs.nestjs.com/guards
- https://docs.nestjs.com/fundamentals/execution-context
*/

@Injectable()
export class AuthsGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return true;
  }
}
