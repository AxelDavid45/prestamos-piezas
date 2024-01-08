import { Controller, Logger } from '@nestjs/common';

@Controller('loans')
export class LoansController {
  private logger = new Logger(LoansController.name);
}
