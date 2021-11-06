import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateJobFileInput {
  @Field()
  title: string;
}
