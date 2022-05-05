import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMohDto, UpdateMohDto } from './moh.dto';
import { Model } from 'mongoose';
import { MOH } from './moh.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MohService {
  constructor(@InjectModel('MOH') private readonly mohModel: Model<MOH>) {}

  async create(createMohDto: CreateMohDto) {
    try {
      const isEmailExist = await this.mohModel
        .findOne({ email: createMohDto.email })
        .exec();

      if (isEmailExist) {
        throw new HttpException('Email already exists.', HttpStatus.CONFLICT);
      } else {
        const newMoh = new this.mohModel(createMohDto);
        const result = await newMoh.save();
        return result;
      }
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const result = await this.mohModel.find().exec();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const moh = await this.mohModel.findById(id).exec();

      if (!moh) {
        throw new NotFoundException('Could not find MOH.');
      }

      return moh;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, updateMohDto: UpdateMohDto) {
    try {
      const filter = { _id: id };
      const updatedMoh = await this.mohModel.findOneAndUpdate(
        filter,
        updateMohDto,
        { new: true, rawResult: true },
      );

      if (!updatedMoh.lastErrorObject.updatedExisting) {
        throw new NotFoundException('Could not find MOH.');
      }

      return updatedMoh.value;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const result = await this.mohModel.deleteOne({ _id: id }).exec();

      if (result.deletedCount === 0) {
        throw new NotFoundException('Failed to delete record.');
      }

      return null;
    } catch (error) {
      throw error;
    }
  }
}
