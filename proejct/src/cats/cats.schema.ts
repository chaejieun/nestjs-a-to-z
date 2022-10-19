import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';

export type CatDocument = Cat & Document;
const options: SchemaOptions = {
  timestamps: true,
};

@Schema()
export class Cat extends Document {
  @Prop({
    required: true,
    unique: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Prop({
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  name: string;

  @Prop({
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  password: string;

  @Prop()
  @IsEmail()
  imgUrl: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
