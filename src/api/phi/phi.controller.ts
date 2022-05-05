import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePhiDto, UpdatePhiDto } from './phi.dto';
import { PhiService } from './phi.service';

@Controller('phi')
export class PhiController {
  constructor(private readonly phiService: PhiService) {}

  @Post()
  create(@Body() createPhiDto: CreatePhiDto) {
    return this.phiService.create(createPhiDto);
  }

  @Get()
  findAll() {
    return this.phiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.phiService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhiDto: UpdatePhiDto) {
    return this.phiService.update(id, updatePhiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.phiService.remove(id);
  }
}
