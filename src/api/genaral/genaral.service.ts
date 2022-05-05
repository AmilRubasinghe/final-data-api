import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGenaralDto, UpdateGenaralDto } from './genaral.dto';
import { GENARAL } from './genaral.interface';

@Injectable()
export class GenaralService {
  constructor(@InjectModel('GENARAL') private readonly genaralModel: Model<GENARAL>) {}

  async create(CreateGenaralDto: CreateGenaralDto) {
    try {
      
        const newGenaral = new this.genaralModel(CreateGenaralDto);
        const result = await newGenaral.save();
        return result;
      
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const result = await this.genaralModel.find().exec();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const genaral = await this.genaralModel.findById(id).exec();

      if (!genaral) {
        throw new NotFoundException('Could not find genaral data.');
      }

      return genaral;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, UpdateGenaralDto: UpdateGenaralDto) {
    try {
      const filter = { _id: id };
      const updatedGenaral = await this.genaralModel.findOneAndUpdate(
        filter,
        UpdateGenaralDto,
        { new: true, rawResult: true },
      );

      if (!updatedGenaral.lastErrorObject.updatedExisting) {
        throw new NotFoundException('Could not find genaral data.');
      }

      return updatedGenaral.value;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const result = await this.genaralModel.deleteOne({ _id: id }).exec();

      if (result.deletedCount === 0) {
        throw new NotFoundException('Failed to delete record.');
      }

      return null;
    } catch (error) {
      throw error;
    }
  }
}
