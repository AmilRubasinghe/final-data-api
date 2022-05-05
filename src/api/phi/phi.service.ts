import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePhiDto, UpdatePhiDto } from './phi.dto';
import { PHI } from './phi.interface';

@Injectable()
export class PhiService {
  constructor(@InjectModel('PHI') private readonly phiModel: Model<PHI>) {}

  async create(createPhiDto: CreatePhiDto) {
    try {
      const isEmailExist = await this.phiModel
        .findOne({ email: createPhiDto.email })
        .exec();

      if (isEmailExist) {
        throw new HttpException('Email already exists.', HttpStatus.CONFLICT);
      } else {
        const newPhi = new this.phiModel(createPhiDto);
        const result = await newPhi.save();
        return result;
      }
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const result = await this.phiModel.find().exec();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const phi = await this.phiModel.findById(id).exec();

      if (!phi) {
        throw new NotFoundException('Could not find PHI.');
      }

      return phi;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, updatePhiDto: UpdatePhiDto) {
    try {
      const filter = { _id: id };
      const updatedPhi = await this.phiModel.findOneAndUpdate(
        filter,
        updatePhiDto,
        { new: true, rawResult: true },
      );

      if (!updatedPhi.lastErrorObject.updatedExisting) {
        throw new NotFoundException('Could not find PHI.');
      }

      return updatedPhi.value;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const result = await this.phiModel.deleteOne({ _id: id }).exec();

      if (result.deletedCount === 0) {
        throw new NotFoundException('Failed to delete record.');
      }

      return null;
    } catch (error) {
      throw error;
    }
  }
}
