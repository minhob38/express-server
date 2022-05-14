import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from '../../entities/posts.entity';

@Injectable()
export class BoardsRepository {
  constructor(
    @InjectRepository(Posts)
    private postsRepository: Repository<Posts>,
  ) {}

  // async findUserByEmail(email: string) {
  //   const user = await this.usersRepository.findOne({ where: { email } });
  //   return user;
  // }

  async createPost(author: string, title: string, content: string) {
    const inserted = await this.postsRepository
      .createQueryBuilder()
      .insert()
      .into(Posts)
      .values({ author, title, content })
      .returning('*')
      .execute();
    return inserted;
  }

  // async updatePassword(email: string, password: string) {
  //   const updated = await this.usersRepository
  //     .createQueryBuilder()
  //     .update(Users)
  //     .set({ password })
  //     .where({ email })
  //     .returning('*')
  //     .execute();
  //   return updated;
  // }

  // async removeUserByEmail(email: string) {
  //   const deleted = await this.usersRepository
  //     .createQueryBuilder()
  //     .delete()
  //     .from(Users)
  //     .where({ email })
  //     .returning('*')
  //     .execute();
  //   return deleted;
  // }
}
