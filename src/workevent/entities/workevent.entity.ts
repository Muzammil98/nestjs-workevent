import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'workevent' })
export class Workevent {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  startsOn: Date;
  
  @CreateDateColumn({ type: 'timestamp' })
  endsOn: Date;

  // @Column({ type: 'varchar', length: 300 })
  // lastname: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;

  @ManyToOne(() => User, (user) => user.workEvents)
  user: User
}
