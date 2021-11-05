import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId, SchemaTypes } from 'mongoose';

export type JobFileDocument = JobFile & Document;

@Schema()
export class JobFile {
  @Prop({ type: SchemaTypes.ObjectId })
  jobRefId: string;

  @Prop()
  title: string;
}

export const JobFileSchema = SchemaFactory.createForClass(JobFile);
