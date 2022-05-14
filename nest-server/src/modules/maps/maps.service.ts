import { Injectable } from '@nestjs/common';
import { MapsRepository } from './maps.repository';
import { IRes } from '../../types/types';
@Injectable()
export class MapsService {
  constructor(private readonly mapsRepository: MapsRepository) {}

  async getSggs(): Promise<IRes> {
    const sggs = await this.mapsRepository.findSggs();
    return {
      status: 200,
      message: 'found sgg',
      data: sggs,
    };
  }

  async getSggQuery(
    south: string,
    west: string,
    north: string,
    east: string,
  ): Promise<IRes> {
    const sggs = await this.mapsRepository.findSggsInBound(
      south,
      west,
      north,
      east,
    );
    return {
      status: 200,
      message: 'found sgg',
      data: sggs,
    };
  }

  async getSgg(sggName: string): Promise<IRes> {
    const sgg = await this.mapsRepository.findSgg(sggName);
    return {
      status: 200,
      message: 'found sgg',
      data: sgg,
    };
  }

  async getSggsAreas(): Promise<IRes> {
    const sggsAreas = await this.mapsRepository.findSggsAreas();
    return {
      status: 200,
      message: "found sgg' area",
      data: sggsAreas,
    };
  }
}
