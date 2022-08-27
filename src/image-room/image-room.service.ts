/* eslint-disable prettier/prettier */
import { InjectModel } from '@nestjs/mongoose';
import { ImageDetails } from './dto/image-details';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import {Image} from '../image-room/entities/image-entity';
@Injectable()
export class ImageRoomService {

  constructor(
    @InjectModel(Image.name) private readonly productModel: Model<Image>,
  ) {}

  async createwithImage(file:any,createProductDto: ImageDetails,request:any)
  {


      console.log(createProductDto,file.originalname)

    const newProduct={
         ...createProductDto,
         images: file.originalname,
       }

       const newProductsave = new this.productModel(newProduct);
      const product = await newProductsave.save();

    return product;
  }
}
