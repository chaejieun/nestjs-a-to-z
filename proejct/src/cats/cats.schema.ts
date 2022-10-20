import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';

export type CatDocument = Cat & Document;
const options: SchemaOptions = {
  timestamps: true,
};

@Schema()
export class Cat extends Document {
  @ApiProperty({
    example: 'example@kakao.com',
    description: 'email',
    required: true,
  })
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
  @IsString()
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

  // 가상 필드를 만들어서
  // 필요한 데이터만 넘겨줄 수 있도록 해주는 역할
  readonly readOnlyData: { id: string; email: string; name: string };
}

export const CatSchema = SchemaFactory.createForClass(Cat);

// virtual field 개념
CatSchema.virtual('readOnlyData').get(function (this: Cat) {
  return {
    id: this.id,
    email: this.email,
    name: this.name,
  };
});
