import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ImageRoomModule } from './image-room/image-room.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://haroon123:haroon123@cluster0.g5loff5.mongodb.net/CLOUD-HAROON?retryWrites=true&w=majority',
    ),
    ImageRoomModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '../client'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
