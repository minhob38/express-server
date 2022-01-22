import knex from '../config/database-connection';
import { ISgg, IBound, ISggArea } from '../types/types';

export const findSggs = async (): Promise<ISgg[]> => {
  const sggs: ISgg[] = await knex('seoul_sggs').select(
    'gid as sggId',
    'sgg_nm as sggName'
  );

  return sggs;
};

export const findSggByName = async (sggName: string): Promise<ISgg> => {
  const sgg: ISgg[] = await knex('seoul_sggs')
    .select('gid as sggId', 'sgg_nm as sggName')
    .where('sgg_nm', 'like', sggName);

  return sgg[0];
};

export const findSggsInBound = async (bound: IBound): Promise<ISgg[]> => {
  const { south, west, north, east } = bound;
  const lineString = `'SRID=4326;LINESTRING(${west} ${south}, ${east} ${north})'`;

  const sggsRaw: any = await knex.raw(
    `select gid sggId, sgg_nm sggName from seoul_sggs where st_intersects(geom::geometry, ${lineString}::geometry)`
  );
  const sggs: ISgg[] = sggsRaw.rows;

  return sggs;
};

export const findSggsAreas = async (): Promise<ISggArea[]> => {
  const sggsAreasRaw: any = await knex.raw(
    'select gid sggId, sgg_nm sggName, st_area(geom) / 1000000 sggArea from (select gid, sgg_nm, st_transform(st_setsrid(geom, 4326), 5179) geom from seoul_sggs) km order by sggArea desc'
  );
  const sggsAreas: ISggArea[] = sggsAreasRaw.rows;

  return sggsAreas;
};
