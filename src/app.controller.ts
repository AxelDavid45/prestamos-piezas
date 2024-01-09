import { Controller, Get, VERSION_NEUTRAL, Version } from '@nestjs/common';

@Controller({ version: VERSION_NEUTRAL })
export class AppController {
  @Get('health')
  getHealth() {
    return {
      status: 'OK',
    };
  }
}
