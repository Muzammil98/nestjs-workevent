import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { WorkeventService } from './workevent.service';
import { WorkeventDTO } from './dto/create-workevent.dto';
import { Workevent } from './entities/workevent.entity';

@Controller('workevent')
export class WorkeventController {
  constructor(private readonly workeventService: WorkeventService) {}

  @Post()
  create(@Body() createWorkeventDto: WorkeventDTO) {
    return this.workeventService.create(createWorkeventDto);
  }

  @Get()
  async findAll(
    @Query('from') from: Date,
    @Query('to') to: Date,
  ): Promise<Workevent[]> {
    return await this.workeventService.findAll(from, to);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workeventService.findOne(id);
  }

  @Get('/user/:userId')
  findAllByUserId(@Param('userId') userId: string) {
    return this.workeventService.findAllUserWorkevents(userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workeventService.remove(id);
  }
}
