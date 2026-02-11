
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class UpdateLocationDto {
  @ApiProperty({ example: -12.046374 })
  @IsNumber()
  lat: number;

  @ApiProperty({ example: -77.042793 })
  @IsNumber()
  lng: number;
}