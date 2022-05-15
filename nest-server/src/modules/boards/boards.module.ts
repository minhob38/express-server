import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { Posts } from '../../entities/posts.entity';
import { BoardsRepository } from './boards.repository';
import { AuthTokenGuard } from 'src/guards/auths.guard';
import { AuthsRepository } from '../auths/auths.repository';
import { AuthsModule } from '../auths/auths.module';
/* AuthTokenGuard error 해결하기 :(
https://docs.nestjs.com/faq/common-errors
https://github.com/nestjs/nest/issues/3856
*/
@Module({
  controllers: [BoardsController],
  providers: [BoardsService, BoardsRepository],
  imports: [TypeOrmModule.forFeature([Posts]), AuthsModule],
})
export class BoardsModule {}

/* [🔎 injection]
- a. module로 import해서, module에 있는 provider를 injection합니다. (이때 해당 module의 exports에 있는 provider들이 injection 됩니다.)
@Module({
  controllers: [BoardsController],
  providers: [BoardsService, BoardsRepository],
  imports: [TypeOrmModule.forFeature([Posts]), AuthsModule],
})
- b. module을 import하지 않고, provicer를 바로 import해서 injection합니다.
@Module({
  controllers: [BoardsController],
  providers: [BoardsService, BoardsRepository, AuthsRepository, AuthsHelper],
  imports: [TypeOrmModule.forFeature([Posts, Users])],
});
*/
