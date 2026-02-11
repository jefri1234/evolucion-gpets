
import { Controller, Param, Query, Get, Post, Body, Patch } from '@nestjs/common';
import { PetsService } from './pets.service';
import { ApiTags, ApiOperation, ApiQuery, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CreatePetDto } from './dto/create-pets.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@ApiTags('Pets')
@Controller('pets')
export class PetsController {
    constructor(private readonly petsService: PetsService) { }

    @Get()
    @ApiOperation({ summary: 'Obtener listado de mascotas con filtros' })

    async findAll(@Query('species') species?: string) {
        return await this.petsService.findAll(species);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener detalle de una mascota' })
    @ApiParam({ name: 'id', description: 'ID de la mascota a obtener', example: '-OlBw_98lUiaBqZ7ezqG' })
    @ApiResponse({ status: 201, description: 'Detalle de la mascota obtenido exitosamente' })
    async findOne(@Param('id') id: string) {
        return await this.petsService.findOne(id);
    }

    @Post()
    @ApiOperation({ summary: 'Crear una nueva mascota' })
    async create(@Body() createPetDto: CreatePetDto) {
        return await this.petsService.create(createPetDto);
    }

    @Patch(':id/location')
    @ApiOperation({ summary: 'Actualizar ubicación de la mascota en tiempo real' })
    @ApiParam({ name: 'id', description: 'ID de la mascota a actualizar', example: '-OlBw_98lUiaBqZ7ezqG' })
    async updateLocation(
        @Param('id') id: string,
        @Body() updateLocationDto: UpdateLocationDto
    ) {
        return await this.petsService.updateLocation(id, updateLocationDto.lat, updateLocationDto.lng);
    }
}