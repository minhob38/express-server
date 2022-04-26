import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthsModule } from './auths/auths.module';
import { AController } from './a/a.controller';

@Module({
  imports: [AuthsModule],
  controllers: [AppController, AController],
  providers: [AppService],
})
export class AppModule {}
