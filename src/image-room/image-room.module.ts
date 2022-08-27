/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { ImageRoomService } from './image-room.service';
import { ImageRoomController } from './image-room.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ImageSchema,Image } from './entities/image-entity';


@Module({
  imports: [

    MongooseModule.forFeature([{ name: Image.name, schema: ImageSchema }]),
  ],
  controllers: [ImageRoomController],
  providers: [ImageRoomService]
})
export class ImageRoomModule {}
