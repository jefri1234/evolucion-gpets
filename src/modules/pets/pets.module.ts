import { Module } from "@nestjs/common";
import { PetsService } from "./pets.service";
import { PetsController } from "./pets.controller";

@Module({
    imports: [],
    controllers: [PetsController],
    providers: [PetsService]

})
export class PetsModule { }