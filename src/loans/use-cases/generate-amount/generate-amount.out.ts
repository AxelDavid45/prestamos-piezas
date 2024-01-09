export class GenerateAmountOut {
  amount: number;
  name: string;

  constructor(partial: Partial<GenerateAmountOut>) {
    Object.assign(this, partial);
  }
}
