import {
  Controller,
  Post,
  Patch,
  Body,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthsGuard } from './auths.guard';
import { AuthsService } from './auths.service';
import { PostSignupDto } from './dto/post-signup';
import { PostSigninDto } from './dto/post-signin';
import { PatchPasswordDto } from './dto/patch-password';
import { IRes } from '../types/types';
// import { CustomValidationPipe } from './validation.pipe';

@UseGuards(AuthsGuard)
@Controller('api/auths')
export class AuthsController {
  constructor(private readonly authsService: AuthsService) {
    this.authsService = authsService;
  }

  @Post('signup')
  async postSignup(@Body() dto: PostSignupDto): Promise<IRes> {
    const { email, password } = dto;
    return await this.authsService.postSignup(email, password);
  }

  @Post('signin')
  async postSignin(@Body() dto: PostSigninDto): Promise<IRes> {
    const { email, password } = dto;
    return await this.authsService.postSignin(email, password);
  }

  @Patch('password')
  async patchPassword(@Body() dto: PatchPasswordDto): Promise<IRes> {
    const { current_password: currentPassword, new_password: newPassword } =
      dto;
    const email = 'abc@gmail.com';
    return await this.authsService.patchPassword(
      email,
      currentPassword,
      newPassword,
    );
  }
}
