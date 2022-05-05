import * as mongoose from 'mongoose';

export const GENARALSchema = new mongoose.Schema({
  questionEn: { type: String },
  questionSin: { type: String },
  answerSin: { type: String },
  answerEn: { type: String },
  isConform: { type: Boolean },
  data: { type: String },
});
