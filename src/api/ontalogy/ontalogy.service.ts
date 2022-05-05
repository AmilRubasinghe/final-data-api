import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOntalogyDto, UpdateOntalogyDto } from './ontalogy.dto';
import { ONTALOGY } from './ontalogy.interface';

@Injectable()
export class OntalogyService {
  constructor(@InjectModel('ONTALOGY') private readonly ontalogyModel: Model<ONTALOGY>) {}

  async create(CreateOntalogyDto: CreateOntalogyDto) {
    try {
     
        const newOntalogy = new this.ontalogyModel(CreateOntalogyDto);
        const result = await newOntalogy.save();
        return result;
      
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const result = await this.ontalogyModel.find().exec();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const ontalogy = await this.ontalogyModel.findById(id).exec();

      if (!ontalogy) {
        throw new NotFoundException('Could not find Ontalogy.');
      }

      return ontalogy;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, UpdateOntalogyDto: UpdateOntalogyDto) {
    try {
      const filter = { _id: id };
      const updatedOntalogy = await this.ontalogyModel.findOneAndUpdate(
        filter,
        UpdateOntalogyDto,
        { new: true, rawResult: true },
      );

      if (!updatedOntalogy.lastErrorObject.updatedExisting) {
        throw new NotFoundException('Could not find Ontalogy.');
      }

      return updatedOntalogy.value;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const result = await this.ontalogyModel.deleteOne({ _id: id }).exec();

      if (result.deletedCount === 0) {
        throw new NotFoundException('Failed to delete record.');
      }

      return null;
    } catch (error) {
      throw error;
    }
  }
}
