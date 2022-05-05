import { Module } from '@nestjs/common';
import { OntalogyService } from './ontalogy.service';
import { OntalogyController } from './ontalogy.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ONTALOGYSchema } from 'src/schemas/ontalogy.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'ONTALOGY', schema: ONTALOGYSchema }])],
  controllers: [OntalogyController],
  providers: [OntalogyService],
})
export class OntalogyModule {}
