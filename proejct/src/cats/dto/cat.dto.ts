import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';
import { Cat } from '../cats.schema';

export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) {
  @ApiProperty({
    example: 'example',
    description: 'id',
    required: true,
  })
  id: string;
}
