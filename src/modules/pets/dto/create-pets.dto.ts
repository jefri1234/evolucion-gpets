
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePetDto {
  @ApiProperty({ example: 'Firulais', description: 'Nombre de la mascota' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Perro', description: 'Especie de la mascota' })
  @IsString()
  @IsNotEmpty()
  species: string;

  @ApiProperty({ example: 3, description: 'Edad de la mascota en años' })
  @IsNumber()
  age: number;

  @ApiProperty({ 
    example: '-OlBTb-6BDaOpFm6YSw6', 
    description: 'El ID del dueño que obtienes de Firebase al crear un owner' 
  })
  @IsString()
  @IsNotEmpty()
  ownerId: string;
}