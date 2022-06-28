import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager, Raw } from 'typeorm';
import { SeoulSggs } from '../../entities/seoul-ssgs.entity';

@Injectable()
export class MapsRepository {
  constructor(
    @InjectRepository(SeoulSggs)
    private seoulSggsRepository: Repository<SeoulSggs>,
  ) {}

  async findSggs() {
    const sggs = await this.seoulSggsRepository.find({
      select: ['sggNm', 'gid'],
    });

    return sggs;
  }

  async findSgg(sggName: string) {
    const sggs = await this.seoulSggsRepository.find({
      select: ['sggNm', 'gid'],
      where: { sggNm: Raw((sggNm) => `${sggNm} like '${sggName}%'`) },
    });

    return sggs;
  }

  async findSggsInBound(
    south: string,
    west: string,
    north: string,
    east: string,
  ) {
    const lineString = `'SRID=4326;LINESTRING(${west} ${south}, ${east} ${north})'`;
    const entityManager = getManager();
    const sggs = await entityManager.query(
      `select gid sggId, sgg_nm sggName from seoul_sggs where st_intersects(geom::geometry, ${lineString}::geometry)`,
    );

    return sggs;
  }

  async findSggsAreas() {
    const entityManager = getManager();
    const sggsAreas = await entityManager.query(
      'select gid sggId, sgg_nm sggName, st_area(geom) / 1000000 sggArea from (select gid, sgg_nm, st_transform(st_setsrid(geom, 4326), 5179) geom from seoul_sggs) km order by sggArea desc',
    );

    return sggsAreas;
  }
}
