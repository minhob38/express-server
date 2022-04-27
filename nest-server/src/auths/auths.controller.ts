import { AuthsService } from './auths.service';
import { Controller, Get } from '@nestjs/common';

@Controller('auths')
export class AuthsController {
  constructor(private readonly authsService: AuthsService) {
    this.authsService = authsService;
  }

  @Get('test')
  test() {
    return 'hello';
  }
}
