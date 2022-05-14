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

  async findPosts() {
    const posts = await this.postsRepository.find();
    return posts;
  }

  async findPost(postId: number) {
    const posts = await this.postsRepository.findOne({ where: { id: postId } });
    return posts;
  }

  async updatePost(postId: number, content: string) {
    const updated = await this.postsRepository
      .createQueryBuilder()
      .update(Posts)
      .set({ content })
      .where({ id: postId })
      .returning('*')
      .execute();
    return updated;
  }

  async removePost(postId: number) {
    const deleted = await this.postsRepository
      .createQueryBuilder()
      .delete()
      .from(Posts)
      .where({ id: postId })
      .returning('*')
      .execute();
    return deleted;
  }
}
