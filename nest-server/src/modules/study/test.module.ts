import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { DynamicStudyModule } from './dynamic.module';
import { StudyScope } from './study.scope';
import { StudyModule } from './study.module';
import { TestRepository } from './test.repository';

@Module({
  imports: [DynamicStudyModule.register({ module: 'test' }), StudyModule],
  providers: [TestRepository],
  controllers: [TestController],
})
export class TestModule {}
