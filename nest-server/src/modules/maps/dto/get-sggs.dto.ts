import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class GetSggsQueryDto {
  @IsNotEmpty()
  @IsNumberString()
  south: string;

  @IsNotEmpty()
  @IsNumberString()
  west: string;

  @IsNotEmpty()
  @IsNumberString()
  north: string;

  @IsNotEmpty()
  @IsNumberString()
  east: string;
}

export class GetSggsParamDto {
  @IsNotEmpty()
  @IsString()
  sggName: string;
}
