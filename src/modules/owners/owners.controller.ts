
import { Controller, Post, Body, Get, Param, NotFoundException } from '@nestjs/common';
import { OwnersService } from './owners.service';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Owner')
@Controller('owners')
export class OwnersController {

  constructor(private readonly ownersService: OwnersService) { }

  @Post()
  @ApiOperation({ summary: 'Registrar un nuevo dueño de mascota' })
  @ApiResponse({ status: 201, description: 'Dueño creado correctamente.' })
  async create(@Body() createOwnerDto: CreateOwnerDto) {
    return await this.ownersService.create(createOwnerDto);
  }

  @Get('by-email/:email')
  @ApiOperation({ summary: 'Buscar dueño por email (para verificar login)' })
  async getByEmail(@Param('email') email: string) {
    const owner = await this.ownersService.findByEmail(email);
    if (!owner) throw new NotFoundException('Dueño no encontrado');
    return owner;
  }
}