import { Module } from '@nestjs/common';
import { LoansController } from './loans.controller';
import { GenerateAmountService } from './use-cases/generate-amount/generate-amount.service';

import { MongooseModule } from '@nestjs/mongoose';
import { Loan, LoanSchema } from './models/loans.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Loan.name, schema: LoanSchema }]),
  ],
  controllers: [LoansController],
  providers: [GenerateAmountService],
})
export class LoansModule {}
