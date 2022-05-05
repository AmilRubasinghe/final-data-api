import { Module } from '@nestjs/common';
import { PhiService } from './phi.service';
import { PhiController } from './phi.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PHISchema } from 'src/schemas/phi.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'PHI', schema: PHISchema }])],
  controllers: [PhiController],
  providers: [PhiService],
})
export class PhiModule {}
