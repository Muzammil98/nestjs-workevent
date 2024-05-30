import { Module } from '@nestjs/common';
import { WorkeventService } from './workevent.service';
import { WorkeventController } from './workevent.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workevent } from './entities/workevent.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Workevent, User])],
  controllers: [WorkeventController],
  providers: [WorkeventService],
})
export class WorkeventModule {}
