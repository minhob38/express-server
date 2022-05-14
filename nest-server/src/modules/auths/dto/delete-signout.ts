import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteSignoutDto {
  @IsNotEmpty()
  @IsString()
  password: string;
}
