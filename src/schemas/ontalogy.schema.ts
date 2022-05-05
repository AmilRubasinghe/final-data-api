import * as mongoose from 'mongoose';

export const ONTALOGYSchema = new mongoose.Schema({
  case: { type: String, required: true },
  disidedCriteria: { type: String },
  recomendationEn: { type: String },
  recomendationSi: { type: String },
  catogory: { type: String },
  isConform:{ type: Boolean },
  data: { type: String },
 
});