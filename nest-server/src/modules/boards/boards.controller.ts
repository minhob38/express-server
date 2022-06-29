import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
  ClassSerializerInterceptor,
  UseInterceptors,
  SerializeOptions,
} from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { plainToClass } from 'class-transformer';
import { BoardsService } from './boards.service';
import { AuthTokenGuard } from '../../guards/auths.guard';
import { PostPostsDto } from './dto/post-posts.dto';
import { GetPostParamDto, GetPostResDto, PostInfo } from './dto/get-post.dto';
import { PatchPostParamDto, PatchPostBodyDto } from './dto/patch-post.dto';
import { DeletePostDto } from './dto/delete-post.dto';
import { IRes } from '../../types/types';

// @UseGuards(AuthTokenGuard)
@Controller('api/boards')
export class BoardsController {
  constructor(
    private readonly boardsService: BoardsService,
    @InjectQueue('boards') private boardsQueue: Queue,
  ) {}

  @Post('posts')
  async postPosts(@Body() dto: PostPostsDto): Promise<IRes> {
    const { author, title, content } = dto;
    return await this.boardsService.postPosts(author, title, content);
  }

  @Get('posts')
  async getPosts(): Promise<any> {
    const job = await this.boardsQueue.add('get-posts', {
      item: 'queue : (',
    });
    // return await this.boardsService.getPosts();
    return 'hello';
  }

  @Get('posts/:postId')
  async getPost(@Param() dto: GetPostParamDto): Promise<IRes> {
    const { postId } = dto;
    // TODO: class-transformation
    return await this.boardsService.getPost(parseInt(postId, 10));
  }

  /* serialization study api */
  @SerializeOptions({
    excludePrefixes: ['_'],
  })
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('post/:postId')
  async getPostSerial(@Param() dto: GetPostParamDto): Promise<GetPostResDto> {
    const { postId } = dto;
    const post = await this.boardsService
      .getPost(parseInt(postId, 10))
      .then((val) => val.data);

    const postInfo = new PostInfo('minho', 'password!@#');
    const res = new GetPostResDto('minho', 200, 'success', postInfo);
    return await res;
  }

  @Patch('posts/:postId')
  async patchPost(
    @Param() paramDto: PatchPostParamDto,
    @Body() bodyDto: PatchPostBodyDto,
  ): Promise<IRes> {
    const { postId } = paramDto;
    const { content } = bodyDto;
    return await this.boardsService.patchPost(parseInt(postId, 10), content);
  }

  @Delete('posts/:postId')
  async deletePost(@Param() dto: DeletePostDto): Promise<IRes> {
    const { postId } = dto;
    return await this.boardsService.deletePost(parseInt(postId, 10));
  }
}
