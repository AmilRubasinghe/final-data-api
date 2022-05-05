import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MOHSchema } from 'src/schemas/moh.schema';
import { MohController } from './moh.controller';
import { MohService } from './moh.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'MOH', schema: MOHSchema }])],
  controllers: [MohController],
  providers: [MohService],
})
export class MohModule {}
