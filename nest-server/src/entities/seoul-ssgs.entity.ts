import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('seoul_sggs_pkey', ['gid'], { unique: true })
@Entity('seoul_sggs', { schema: 'public' })
export class SeoulSggs {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'gid' })
  gid: number;

  @Column('character varying', {
    name: 'adm_sect_c',
    nullable: true,
    length: 254,
  })
  admSectC: string | null;

  @Column('character varying', { name: 'sgg_nm', nullable: true, length: 254 })
  sggNm: string | null;

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
