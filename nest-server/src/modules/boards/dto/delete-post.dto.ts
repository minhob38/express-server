import { IsNotEmpty, IsNumberString } from 'class-validator';

export class DeletePostDto {
  @IsNotEmpty()
  @IsNumberString()
  postId: string;
}
