import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateJobFileInput {
  @Field()
  title: string;
}
