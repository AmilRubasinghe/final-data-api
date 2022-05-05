import { Module } from '@nestjs/common';
import { MohModule } from './moh/moh.module';
import { PhiModule } from './phi/phi.module';
import { OntalogyModule } from './ontalogy/ontalogy.module';
import { GenaralModule } from './genaral/genaral.module';

@Module({
  imports: [MohModule, PhiModule,OntalogyModule,GenaralModule],
})
export class ApiModule {}
