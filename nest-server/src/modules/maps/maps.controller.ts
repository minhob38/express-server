import { Controller, Get, Param, Query, Logger } from '@nestjs/common';
import { MapsService } from './maps.service';
import { GetSggsQueryDto, GetSggsParamDto } from './dto/get-sggs.dto';
import { IRes } from '../../types/types';

@Controller('api/maps')
export class MapsController {
  constructor(
    private readonly mapsService: MapsService,
    private readonly logger: Logger,
  ) {}

  @Get('sggs')
  async getSggs(): Promise<IRes> {
    this.logger.log('...');
    return await this.mapsService.getSggs();
  }

  // TODO: sggs? sggs @Get('sggs')로 처리하는법 찾아보기 : (
  @Get('sgg')
  async getSggQuery(@Query() dto: GetSggsQueryDto): Promise<IRes> {
    const { south, west, north, east } = dto;
    return await this.mapsService.getSggQuery(south, west, north, east);
  }

  @Get('sggs/:sggName')
  async getSgg(@Param() dto: GetSggsParamDto): Promise<IRes> {
    const { sggName } = dto;
    return await this.mapsService.getSgg(sggName);
  }

  @Get('sggs/areas')
  async getSggsAreas(): Promise<IRes> {
    return await this.mapsService.getSggsAreas();
  }
}
