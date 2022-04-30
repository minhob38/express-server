import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { createUserDto } from './dto/create-user.dto';
import { ValidationPipe } from './validation.pipe';

@Controller('auths')
export class AuthsController {
  constructor(private readonly authsService: AuthsService) {
    this.authsService = authsService;
  }

  // @Post('signup')
  // async postSignup(@Body() dto: createUserDto): Promise<any> {
  //   const { email, password } = dto;
  //   console.log(dto);
  //   await this.authsService.createUser(email, password);
  //   return 'hell1o';
  // }

  @Post('signup')
  async postSignup(@Body('email', ValidationPipe) email: string): Promise<any> {
    // const { email, password } = dto;
    console.log(email);
    // await this.authsService.createUser(email, password);
    return 'hell1o';
  }
}
