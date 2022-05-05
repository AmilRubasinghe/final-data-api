import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMohDto, UpdateMohDto } from './moh.dto';
import { MohService } from './moh.service';

@Controller('moh')
export class MohController {
  constructor(private readonly mohService: MohService) {}

  @Post()
  create(@Body() createMohDto: CreateMohDto) {
    return this.mohService.create(createMohDto);
  }

  @Get()
  findAll() {
    return this.mohService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mohService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMohDto: UpdateMohDto) {
    return this.mohService.update(id, updateMohDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mohService.remove(id);
  }
}
