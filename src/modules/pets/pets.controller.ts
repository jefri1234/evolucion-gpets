
import { Controller, Param, Query, Get, Post, Body, Patch, Delete } from '@nestjs/common';
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
    async updateLocation(
        @Param('id') id: string,
        @Body() locationData: { latitude: number; longitude: number }
    ) {
        return this.petsService.updateLocation(id, locationData);
    }

    @Get('owner/:ownerId')
    async getByOwner(@Param('ownerId') ownerId: string) {
        return this.petsService.findByOwner(ownerId);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.petsService.remove(id);
    }


}