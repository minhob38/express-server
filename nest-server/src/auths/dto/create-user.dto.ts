import { IsEmail, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
export class createUserDto {
  @IsEmail()
  email: string;

  @Transform((params) => {
    console.log(params);
    return params.value;
  })
  @IsString() // 요청은 모두 string으로 간주합니다. (validation 전에 transform을 해야합니다.)
  password: string;
}
