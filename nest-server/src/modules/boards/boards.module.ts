import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { Posts } from '../../entities/posts.entity';
import { BoardsRepository } from './boards.repository';

/* AuthTokenGuard error 해결하기 :(
https://docs.nestjs.com/faq/common-errors
https://github.com/nestjs/nest/issues/3856
*/
@Module({
  controllers: [BoardsController],
  providers: [BoardsService, BoardsRepository],
  imports: [TypeOrmModule.forFeature([Posts])],
})
export class BoardsModule {}
