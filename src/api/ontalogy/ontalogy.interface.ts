import { Document } from 'mongoose';

export interface ONTALOGY extends Document {
  readonly _id: string;
  readonly case: string;
  readonly disidedCriteria: string;
  readonly recomendationEn: string;
  readonly recomendationSi: string;
  readonly catogory: string;
  readonly data: string;
  readonly isConform: boolean;
}
