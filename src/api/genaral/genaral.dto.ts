import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional } from 'class-validator';
export class CreateGenaralDto {
  @IsNotEmpty()
  answerSin: string;

  answerEn: string;

  @IsNotEmpty()
  questionEn: string;

  @IsNotEmpty()
  questionSin: string;

  @IsOptional()
  data: string;

  @IsNotEmpty()
  isConform: boolean;

}

export class UpdateGenaralDto extends PartialType(CreateGenaralDto) {}
