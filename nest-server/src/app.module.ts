import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthsModule } from './auths/auths.module';

@Module({
  imports: [AuthsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
