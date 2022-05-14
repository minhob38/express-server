import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class PostSigninDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
