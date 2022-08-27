import { Test, TestingModule } from '@nestjs/testing';
import { ImageRoomService } from './image-room.service';

describe('ImageRoomService', () => {
  let service: ImageRoomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImageRoomService],
    }).compile();

    service = module.get<ImageRoomService>(ImageRoomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
