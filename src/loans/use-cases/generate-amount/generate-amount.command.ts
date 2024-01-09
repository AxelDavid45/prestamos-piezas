import { IsNumber, IsNumberString, IsString } from 'class-validator';

export class GenerateAmountCommand {
  @IsNumberString()
  id: string;

  @IsNumber()
  weight: number;
}
