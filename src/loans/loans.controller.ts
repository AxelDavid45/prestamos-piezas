import { Body, Controller, Logger, Post } from '@nestjs/common';
import { GenerateAmountCommand } from './use-cases/generate-amount/generate-amount.command';
import { GenerateAmountService } from './use-cases/generate-amount/generate-amount.service';

@Controller('loans')
export class LoansController {
  private logger = new Logger(LoansController.name);

  constructor(private readonly generateAmount: GenerateAmountService) {}

  @Post()
  async getAmount(@Body() body: GenerateAmountCommand) {
    return this.generateAmount.execute(body);
  }
}
