import { Document } from 'mongoose';

export interface GENARAL extends Document {
  readonly _id: string;
  readonly questionEn: string;
  readonly questionSin: string;
  readonly answerSin: string;
  readonly answerEn: string;
  readonly isConform: boolean;
  readonly data: string;

}
