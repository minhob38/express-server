import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('posts_pkey', ['id'], { unique: true })
@Entity('posts', { schema: 'public' })
export class Posts {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'author' })
  author: string;

  @Column('character varying', { name: 'title' })
  title: string;

  @Column('character varying', { name: 'content' })
  content: string;

  @Column('timestamp without time zone', {
    name: 'created_at',
    default: () => 'now()',
  })
  createdAt: Date;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
