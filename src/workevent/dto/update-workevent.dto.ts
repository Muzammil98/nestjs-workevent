import { PartialType } from '@nestjs/mapped-types';
import { WorkeventDTO } from './create-workevent.dto';

export class UpdateWorkeventDto extends PartialType(WorkeventDTO) {}
