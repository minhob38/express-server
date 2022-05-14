import { Controller, Get, Render } from '@nestjs/common';

// TODO: hbs에서 css, js load 하기 : (
@Controller('pages')
export class PagesController {
  @Get('home')
  @Render('home')
  getHome() {
    const current = new Date();

    const currentDateTime = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate(),
      hour: current.getHours(),
      minute: current.getMinutes(),
      second: current.getSeconds(),
    };

    return { currentDateTime };
  }
}
