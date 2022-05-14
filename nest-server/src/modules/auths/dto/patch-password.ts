import { IsNotEmpty, IsString } from 'class-validator';

export class PatchPasswordDto {
  @IsNotEmpty()
  @IsString()
  current_password: string;

  @IsNotEmpty()
  @IsString()
  new_password: string;
}
