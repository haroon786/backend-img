import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ImageRoomModule } from './image-room/image-room.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://haroon123:haroon123@cluster0.g5loff5.mongodb.net/CLOUD-HAROON?retryWrites=true&w=majority',
    ),
    ImageRoomModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
