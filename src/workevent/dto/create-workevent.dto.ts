import { Workevent } from '../entities/workevent.entity';

export class WorkeventDTO implements Readonly<WorkeventDTO> {
  // startsOn: Date;
  // endsOn: Date;
  workevents: Workevent[];
  userId: string;

  // public static from(dto: Partial<WorkeventDTO>) {
  //   const it = new WorkeventDTO();
  //   it.id = dto.id;
  //   it.startsOn = dto.startsOn;
  //   it.endsOn = dto.endsOn;
  //   return it;
  // }

  // public static fromEntity(entity: Workevent) {
  //   return this.from({
  //     id: entity.id,
  //     startsOn: entity.startsOn,
  //     endsOn: entity.endsOn,
  //   });
  // }

  // public toEntity(user: any) {
  //   const it = new Workevent();
  //   it.id = this.id;
  //   it.startsOn = this.startsOn;
  //   it.endsOn = this.endsOn;
  //   it.createDateTime = new Date();
  //   return it;
  // }
}
