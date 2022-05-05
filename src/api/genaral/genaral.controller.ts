import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateGenaralDto, UpdateGenaralDto } from './genaral.dto';
import { GenaralService } from './genaral.service';

@Controller('genaral')
export class GenaralController {
  constructor(private readonly GenaralService: GenaralService) {}

  @Post()
  create(@Body() CreateGenaralDto: CreateGenaralDto) {
    return this.GenaralService.create(CreateGenaralDto);
  }

  @Get()
  findAll() {
    return this.GenaralService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.GenaralService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateGenaralDto: UpdateGenaralDto) {
    return this.GenaralService.update(id, UpdateGenaralDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.GenaralService.remove(id);
  }
}
