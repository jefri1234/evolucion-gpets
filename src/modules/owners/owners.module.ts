import { Module } from '@nestjs/common';
import { OwnersController } from './owners.controller';
import { OwnersService } from './owners.service';
import { FirebaseModule } from '../../common/firebase/firebase.module';


@Module({
  imports: [FirebaseModule],
  controllers: [OwnersController],
  providers: [OwnersService],
})
export class OwnersModule { }
