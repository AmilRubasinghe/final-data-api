import * as mongoose from 'mongoose';

export const PHISchema = new mongoose.Schema({
  name: { type: String, required: true },
  district: { type: String },
  mobile: { type: String },
  address: { type: String },
  sinName: { type: String },
  sinDistrict: { type: String },
  sinAddress: { type: String },
  email: { type: String, unique: true },
});
