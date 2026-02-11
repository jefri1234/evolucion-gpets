
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class PetDto {
  @ApiProperty({ example: '-Nabc123' })
  id: string;

  @ApiProperty({ example: 'Firulais' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Perro' })
  @IsString()
  species: string;

  @ApiProperty({ example: 3 })
  @IsNumber()
  age: number;

  @ApiProperty({ example: 'owner_987' })
  @IsString()
  ownerId: string;
}