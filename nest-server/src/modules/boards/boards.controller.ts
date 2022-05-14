import {
  Controller,
  Post,
  Patch,
  Delete,
  Body,
  UseGuards,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthTokenGuard } from '../../guards/auths.guard';
import { PostPostsDto } from './dto/post-posts.dto';
import { IRes } from '../../types/types';
import { BoardsService } from './boards.service';

// @UseGuards(AuthTokenGuard)
@Controller('api/boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Post('posts')
  async postPosts(@Body() dto: PostPostsDto): Promise<IRes> {
    const { author, title, content } = dto;
    return await this.boardsService.postPosts(author, title, content);
  }
}
