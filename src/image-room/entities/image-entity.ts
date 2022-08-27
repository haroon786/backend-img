/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  toJSON: {
    getters: true,
  },
})


export class Image extends Document {
  @Prop()
  like: number;

  @Prop()
  views:number;

  @Prop()
  images:string;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
