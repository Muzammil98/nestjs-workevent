import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { WorkeventDTO } from './dto/create-workevent.dto';
import { UpdateWorkeventDto } from './dto/update-workevent.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';
import { Workevent } from './entities/workevent.entity';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class WorkeventService {
  constructor(
    @InjectRepository(Workevent)
    private repo: Repository<Workevent>,
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(workeventDTO: WorkeventDTO): Promise<void> {
    const foundUser = await this.userRepo.findOneBy({
      id: workeventDTO.userId,
    });

    if (!foundUser) {
      throw new HttpException(
        'User not found, cannot create workevent',
        HttpStatus.BAD_REQUEST,
      );
    }

    for (let i = 0; i < workeventDTO.workevents.length; i++) {
      const item = workeventDTO.workevents[i];

      const workEvent = new Workevent();
      workEvent.startsOn = item.startsOn;
      workEvent.endsOn = item.endsOn;
      workEvent.user = foundUser;

      await this.repo.save(workEvent);
    }
  }

  async findAll(from, to): Promise<Workevent[]> {
    try {
      const query = {
        relations: {
          user: true,
        },
      };

      if (from && to) {
        query['where'] = {
          startsOn: MoreThanOrEqual(from),
          endsOn: LessThanOrEqual(to),
        };
      }
      const res = await this.repo.find(query);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
  async findAllUserWorkevents(userId: string): Promise<Workevent[]> {
    try {
      const res = await this.repo.find({
        where: {
          user: {
            id: userId,
          },
        },
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  async findOne(id: string): Promise<Workevent | null> {
    const res = await this.repo.findOneBy({ id });
    return res;
  }

  async remove(id: string): Promise<void> {
    await this.repo.delete({ id });
  }
}
