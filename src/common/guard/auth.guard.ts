import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, Inject } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(@Inject('FIREBASE_APP') private firebaseApp: admin.app.App) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split('Bearer ')[1];

    if (!token) throw new UnauthorizedException('No se proporcionó token');

    try {
      // Validamos el token contra Firebase 
      const decodedToken = await this.firebaseApp.auth().verifyIdToken(token);
      request.user = decodedToken;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Token inválido');
    }
  }
}