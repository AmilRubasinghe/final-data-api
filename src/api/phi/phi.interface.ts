import { Document } from 'mongoose';

export interface PHI extends Document {
  readonly _id: string;
  readonly name: string;
  readonly district: string;
  readonly mobile: string;
  readonly address: string;
  readonly email: string;
  readonly sinName: string;
  readonly sinDistrict: string;
  readonly sinAddress: string;
}
