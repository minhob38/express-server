import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { AuthTokenGuard } from '../../guards/auths.guard';
import { PostPostsDto } from './dto/post-posts.dto';
import { GetPostDto } from './dto/get-post.dto';
import { PatchPostParamDto, PatchPostBodyDto } from './dto/patch-post.dto';
import { DeletePostDto } from './dto/delete-post.dto';
import { IRes } from '../../types/types';

// @UseGuards(AuthTokenGuard)
@Controller('api/boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Post('posts')
  async postPosts(@Body() dto: PostPostsDto): Promise<IRes> {
    const { author, title, content } = dto;
    return await this.boardsService.postPosts(author, title, content);
  }

  @Get('posts')
  async getPosts(): Promise<IRes> {
    return await this.boardsService.getPosts();
  }

  @Get('post/:postId')
  async getPost(@Param() dto: GetPostDto): Promise<IRes> {
    const { postId } = dto;
    // TODO: class-transformation
    return await this.boardsService.getPost(parseInt(postId, 10));
  }

  @Patch('post/:postId')
  async patchPost(
    @Param() paramDto: PatchPostParamDto,
    @Body() bodyDto: PatchPostBodyDto,
  ): Promise<IRes> {
    const { postId } = paramDto;
    const { content } = bodyDto;
    return await this.boardsService.patchPost(parseInt(postId, 10), content);
  }

  @Delete('post/:postId')
  async deletePost(@Param() dto: DeletePostDto): Promise<IRes> {
    const { postId } = dto;
    return await this.boardsService.deletePost(parseInt(postId, 10));
  }
}
