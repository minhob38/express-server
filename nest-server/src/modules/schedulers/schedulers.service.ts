import { Injectable } from '@nestjs/common';
import { Cron, Interval, Timeout, SchedulerRegistry } from '@nestjs/schedule';

@Injectable()
export class SchedulersService {
  constructor(private schedulerRegistry: SchedulerRegistry) {}

  @Cron('30 * * * * *', {
    name: 'notification-cron',
  })
  notifyCron() {
    console.log(`notification-cron: ${new Date()}`);
  }

  @Interval('notification-interval', 10000)
  notifyInterval() {
    console.log(`notification-interval: ${new Date()}`);
  }

  @Timeout('notification-timeout', 15000)
  notifyTimeout() {
    console.log(`notification-timeout: ${new Date()}`);
  }

  // @Cron('0 45 0 29 6 *', {
  //   name: 'stop-cron',
  // })
  @Cron('0 52 0 * * *', {
    name: 'stop-cron',
  })
  stopCron() {
    console.log(`stop-cron: ${new Date()}`);
    const job = this.schedulerRegistry.getCronJob('notification-cron');
    job.stop();
  }

  @Cron(new Date(Date.now() + 60 * 2000), {
    name: 'restart-cron',
  })
  restartCron() {
    console.log(`restart-cron: ${new Date()}`);
    const job = this.schedulerRegistry.getCronJob('notification-cron');
    job.start();
  }
}
