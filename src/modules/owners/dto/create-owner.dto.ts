// src/owners/dto/create-owner.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateOwnerDto {
  @ApiProperty({ example: 'vladimir@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Vladimir C.' })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({ example: '+51 987654321', required: false })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({ example: 'Av. Siempre Viva 123', required: false })
  @IsString()
  @IsOptional()
  address?: string;
}