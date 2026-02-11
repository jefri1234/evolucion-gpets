import { Module, Global } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ConfigService, ConfigModule } from '@nestjs/config';

@Global()
@Module({
  providers: [
    {
      provide: 'FIREBASE_APP',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return admin.initializeApp({
          credential: admin.credential.cert({
            projectId: configService.get<string>('FIREBASE_PROJECT_ID'),
            clientEmail: configService.get<string>('FIREBASE_CLIENT_EMAIL'),
            privateKey: configService.get<string>('FIREBASE_PRIVATE_KEY').replace(/\\n/g, '\n'),
          }),
          databaseURL: configService.get<string>('FIREBASE_DATABASE_URL'),
        });
      },
    },
  ],
  exports: ['FIREBASE_APP'],
  imports: [ConfigModule],
})
export class FirebaseModule { }