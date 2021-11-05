import { CreateJobFileInput } from './create-job-file.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateJobFileInput extends PartialType(CreateJobFileInput) {
  @Field(() => Int)
  id: number;
}
