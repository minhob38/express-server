import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthsGuard } from './auths.guard';
import { AuthsService } from './auths.service';
import { PostSignupDto } from './dto/post-signup';
import { PostSigninDto } from './dto/post-signin';
import { IRes } from '../types/types';

// import { CustomValidationPipe } from './validation.pipe';

@UseGuards(AuthsGuard)
@Controller('api/auths')
export class AuthsController {
  constructor(private readonly authsService: AuthsService) {
    this.authsService = authsService;
  }

  @Post('signup')
  async postSignup(
    @Body(new ValidationPipe()) dto: PostSignupDto,
  ): Promise<IRes> {
    const { email, password } = dto;
    return await this.authsService.postSignup(email, password);
  }

  @Post('signin')
  async postSignin(
    @Body(new ValidationPipe()) dto: PostSigninDto,
  ): Promise<IRes> {
    const { email, password } = dto;
    return await this.authsService.postSignin(email, password);
  }
}
