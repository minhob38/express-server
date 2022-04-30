import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { createUserDto } from './dto/create-user.dto';
import { ValidationPipe } from './validation.pipe';

@Controller('auths')
export class AuthsController {
  constructor(private readonly authsService: AuthsService) {
    this.authsService = authsService;
  }

  @Post('signup')
  async postSignup(
    @Body(new ValidationPipe()) dto: createUserDto,
  ): Promise<any> {
    const { email, password } = dto;
    await this.authsService.createUser(email, password);
    return 'hello';
  }
}
