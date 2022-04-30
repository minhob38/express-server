import { IsEmail, IsInt, IsString } from 'class-validator';
export class createUserDto {
  @IsEmail()
  email: string;

  @IsString() // 요청은 모두 string으로 간주합니다. (validation 전에 transform을 해야합니다.)
  password: string;
}
