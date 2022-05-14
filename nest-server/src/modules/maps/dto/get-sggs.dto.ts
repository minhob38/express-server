import { IsNotEmpty, IsNumberString } from 'class-validator';

export class GetSggsDto {
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
