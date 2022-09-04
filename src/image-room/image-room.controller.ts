/* eslint-disable prettier/prettier */

import { Body, Controller, Get,Post, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageDetails } from './dto/image-details';

import { ImageRoomService } from './image-room.service';

@Controller('image-room')
export class ImageRoomController {
  constructor(private readonly imageRoomService: ImageRoomService) {}

  @Post('file')
  @UseInterceptors(FileInterceptor('images'))
  uploadFile(
    @Body() body: ImageDetails,
    @UploadedFile() file: Express.Multer.File,
    @Req() request: any,

  ) {
    console.log("d")
    return this.imageRoomService.createwithImage(file,body,request)

    };


    @Get('hello')
    getHello() {
    return 'Hello, world!';
  }
}
