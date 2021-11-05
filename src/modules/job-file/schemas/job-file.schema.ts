import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type JobFileDocument = JobFile & Document;

@Schema()
@ObjectType()
export class JobFile {
  @Prop({ type: SchemaTypes.ObjectId })
  @Field(() => String, { nullable: true })
  jobRefId: string;

  @Prop()
  @Field()
  title: string;
}

export const JobFileSchema = SchemaFactory.createForClass(JobFile);
