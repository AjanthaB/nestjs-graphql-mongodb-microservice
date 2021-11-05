import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateJobFileInput {
  title: string;
}
