import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional } from 'class-validator';
export class CreateOntalogyDto {
  @IsNotEmpty()
  case: string;

  disidedCriteria: string;

  @IsNotEmpty()
  recomendationEn: string;

  @IsNotEmpty()
  recomendationSi: string;

  @IsOptional()
  data: string;

  @IsNotEmpty()
  catogory: string;

  @IsNotEmpty()
  isConform: boolean;

}

export class UpdateOntalogyDto extends PartialType(CreateOntalogyDto) {}
