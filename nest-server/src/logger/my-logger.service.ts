import { Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class MyLogger implements LoggerService {
  log(message: any, ...optionalParams: any[]) {
    console.log("my logger's message(info):", message);
  }

  error(message: any, ...optionalParams: any[]) {
    console.log("my logger's message(error):", message);
  }

  warn(message: any, ...optionalParams: any[]) {
    console.log("my logger's message(warn):", message);
  }

  debug?(message: any, ...optionalParams: any[]) {
    console.log("my logger's message(debug):", message);
  }

  verbose?(message: any, ...optionalParams: any[]) {
    console.log("my logger's message(verbose):", message);
  }
}
