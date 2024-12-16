import { Controller, Get, Ip } from '@nestjs/common';
import { AppService } from './app.service';
import { RealIP } from 'nestjs-real-ip';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('getip')
  getUserIp(@RealIP() userIp) {
    console.log(userIp);
    return userIp;
  }
}
