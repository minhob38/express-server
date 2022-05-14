import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class PatchPostParamDto {
  @IsNotEmpty()
  @IsNumberString()
  postId: string;
}

export class PatchPostBodyDto {
  @IsNotEmpty()
  @IsString()
  content: string;
}
