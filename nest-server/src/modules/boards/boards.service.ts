import { Injectable, BadRequestException } from '@nestjs/common';
import { BoardsRepository } from './boards.repository';
import { IRes } from '../../types/types';

@Injectable()
export class BoardsService {
  constructor(private readonly boardsRepository: BoardsRepository) {}

  async postPosts(
    author: string,
    title: string,
    content: string,
  ): Promise<IRes> {
    await this.boardsRepository.createPost(author, title, content);
    return {
      status: 200,
      message: 'created post',
    };
  }
}
