import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('seoul_bjds_pkey', ['gid'], { unique: true })
@Entity('seoul_bjds', { schema: 'public' })
export class SeoulBjds {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'gid' })
  gid: number;

  @Column('character varying', { name: 'emd_cd', nullable: true, length: 254 })
  emdCd: string | null;

  @Column('character varying', { name: 'emd_nm', nullable: true, length: 254 })
  emdNm: string | null;

  @Column('integer', { name: 'sgg_oid', nullable: true })
  sggOid: number | null;

  @Column('character varying', {
    name: 'col_adm_se',
    nullable: true,
    length: 254,
  })
  colAdmSe: string | null;

  @Column('integer', { name: '__gid', nullable: true })
  __gid: number | null;

  @Column('geometry', { name: 'geom', nullable: true })
  geom: string | null;
}
