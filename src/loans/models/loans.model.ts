import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LoansDocument = HydratedDocument<Loan>;

@Schema()
export class Loan {
  @Prop()
  publicId: string;

  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  percentage: number;
}

export const LoanSchema = SchemaFactory.createForClass(Loan);
LoanSchema.index({ publicId: 1 }, { unique: true });
