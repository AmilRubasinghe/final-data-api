import { Module } from '@nestjs/common';
import { GenaralService } from './genaral.service';
import { GenaralController } from './genaral.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GENARALSchema } from 'src/schemas/genaral.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'GENARAL', schema: GENARALSchema }])],
  controllers: [GenaralController],
  providers: [GenaralService],
})
export class GenaralModule {}
