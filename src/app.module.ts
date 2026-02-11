import { Module } from '@nestjs/common';
import { OwnersModule } from './modules/owners/owners.module';
import { ConfigModule } from '@nestjs/config';
import { PetsModule } from './modules/pets/pets.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    OwnersModule,
    PetsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
