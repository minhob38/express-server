import { IsNotEmpty, IsString } from 'class-validator';

export class PostPostsDto {
  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;
}
