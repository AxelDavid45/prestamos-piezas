import { Injectable, Logger } from '@nestjs/common';
import { GenerateAmountOut } from './generate-amount.out';
import { GenerateAmountCommand } from './generate-amount.command';
import { InjectModel } from '@nestjs/mongoose';
import { Loan } from '../../models/loans.model';
import { Model } from 'mongoose';
import { EntityNotFoundException } from '../../../exceptions/entity-not-found.exception';

@Injectable()
export class GenerateAmountService {
  private readonly logger = new Logger(GenerateAmountService.name);

  constructor(
    @InjectModel(Loan.name) private readonly loansModel: Model<Loan>,
  ) {}

  async execute(command: GenerateAmountCommand): Promise<GenerateAmountOut> {
    const { id, weight } = command;
    this.logger.log(command, 'command');
    const loan = await this.loansModel
      .findOne({
        publicId: id,
      })
      .exec();

    this.logger.log(loan);

    if (!loan) {
      throw new EntityNotFoundException({
        code: 'LOAN_NOT_FOUND',
        message: 'Conditions not found',
        httpStatus: 404,
        description: 'Cannot generate amount because conditions are not found',
      });
    }

    const loanAmount = weight * loan.price * (loan.percentage / 100);
    return new GenerateAmountOut({ amount: loanAmount, name: loan.name });
  }
}
