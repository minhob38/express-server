import {
  Controller,
  Post,
  Patch,
  Delete,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthsGuard, AuthTokenGuard } from '../guards/auths.guard';
import { AuthsService } from './auths.service';
import { PostSignupDto } from './dto/post-signup';
import { PostSigninDto } from './dto/post-signin';
import { PatchPasswordDto } from './dto/patch-password';
import { DeleteSignoutDto } from './dto/delete-signout';
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

  @UseGuards(AuthTokenGuard)
  @Patch('password')
  async patchPassword(
    @Req() req: Request,
    @Body() dto: PatchPasswordDto,
  ): Promise<IRes> {
    const { current_password: currentPassword, new_password: newPassword } =
      dto;
    const { email } = req.userInfo;
    return await this.authsService.patchPassword(
      email,
      currentPassword,
      newPassword,
    );
  }

  @UseGuards(AuthTokenGuard)
  @Delete('signout')
  async deleteSignout(
    @Req() req: Request,
    @Body() dto: DeleteSignoutDto,
  ): Promise<IRes> {
    const { password } = dto;
    const { email } = req.userInfo;
    return await this.authsService.deleteSignout(email, password);
  }
}
