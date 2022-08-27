import { Test, TestingModule } from '@nestjs/testing';
import { ImageRoomController } from './image-room.controller';
import { ImageRoomService } from './image-room.service';

describe('ImageRoomController', () => {
  let controller: ImageRoomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImageRoomController],
      providers: [ImageRoomService],
    }).compile();

    controller = module.get<ImageRoomController>(ImageRoomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
