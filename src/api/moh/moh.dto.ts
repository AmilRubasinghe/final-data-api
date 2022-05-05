import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateMohDto {
  @IsNotEmpty()
  name: string;

  district: string;

  @IsNotEmpty()
  mobile: string;

  @IsNotEmpty()
  address: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  sinName: string;

  @IsNotEmpty()
  sinDistrict: string;

  @IsNotEmpty()
  sinAddress: string;
}

export class UpdateMohDto extends PartialType(CreateMohDto) {}
