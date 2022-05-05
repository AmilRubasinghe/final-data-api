import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateOntalogyDto, UpdateOntalogyDto } from './ontalogy.dto';
import { OntalogyService } from './ontalogy.service';

@Controller('ontalogy')
export class OntalogyController {
  constructor(private readonly ontalogyService: OntalogyService) {}

  @Post()
  create(@Body() CreateOntalogyDto: CreateOntalogyDto) {
    return this.ontalogyService.create(CreateOntalogyDto);
  }

  @Get()
  findAll() {
    return this.ontalogyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ontalogyService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOntalogyDto: UpdateOntalogyDto) {
    return this.ontalogyService.update(id, updateOntalogyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ontalogyService.remove(id);
  }
}
