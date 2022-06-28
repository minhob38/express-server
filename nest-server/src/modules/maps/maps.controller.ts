import {
  Controller,
  Get,
  Param,
  Query,
  Logger,
  Inject,
  CACHE_MANAGER,
} from '@nestjs/common';
import { Cache } from 'cache-manager';
import { MapsService } from './maps.service';
import { GetSggsQueryDto, GetSggsParamDto } from './dto/get-sggs.dto';
import { IRes } from '../../types/types';

const findAllCache = async (cacheManager) => {
  const keys = await cacheManager.store.keys();
  const values: { [key: string]: any } = {};
  for (const key of keys) {
    values[key] = await cacheManager.get(key);
  }
  console.log('keys');
  console.log(keys);
  console.log('values');
  console.log(values);
};
@Controller('api/maps')
export class MapsController {
  constructor(
    private readonly mapsService: MapsService,
    private readonly logger: Logger,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  @Get('sggs')
  async getSggs(): Promise<IRes> {
    this.logger.log('...');
    await findAllCache(this.cacheManager);
    return await this.mapsService.getSggs();
  }

  // TODO: sggs? sggs @Get('sggs')로 처리하는법 찾아보기 : (
  @Get('sgg')
  async getSggQuery(@Query() dto: GetSggsQueryDto): Promise<IRes> {
    const { south, west, north, east } = dto;
    await findAllCache(this.cacheManager);
    return await this.mapsService.getSggQuery(south, west, north, east);
  }

  @Get('sggs/:sggName')
  async getSgg(@Param() dto: GetSggsParamDto): Promise<IRes> {
    const { sggName } = dto;
    await findAllCache(this.cacheManager);
    return await this.mapsService.getSgg(sggName);
  }

  @Get('sggs/areas')
  async getSggsAreas(): Promise<IRes> {
    await findAllCache(this.cacheManager);
    return await this.mapsService.getSggsAreas();
  }
}
