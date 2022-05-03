import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthsGuard } from './auths.guard';
import { AuthsService } from './auths.service';
import { createUserDto } from './dto/create-user.dto';
// import { CustomValidationPipe } from './validation.pipe';

@UseGuards(AuthsGuard)
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
    console.log('Post: signup');
    await this.authsService.createUser(email, password);
    return 'hello';
  }
}
