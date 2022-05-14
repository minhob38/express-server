import { IsNotEmpty, IsNumberString } from 'class-validator';

export class GetPostDto {
  @IsNotEmpty()
  @IsNumberString()
  postId: string;
}
