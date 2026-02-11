// src/owners/owners.service.ts
import { Injectable, Inject } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { CreateOwnerDto } from './dto/create-owner.dto';

@Injectable()
export class OwnersService {
  constructor(
    @Inject('FIREBASE_APP') private readonly firebaseApp: admin.app.App,
  ) { }

  private get db() {
    return this.firebaseApp.database();
  }

  async create(createOwnerDto: CreateOwnerDto) {
    const ref = this.db.ref('owners');
    const newOwnerRef = ref.push();
    await newOwnerRef.set(createOwnerDto);
    return { id: newOwnerRef.key, ...createOwnerDto };
  }

  async findByEmail(email: string) {
    const db = admin.database();
    const snapshot = await db.ref('owners')
      .orderByChild('email')
      .equalTo(email)
      .once('value');

    const data = snapshot.val();
    if (!data) return null;

    const id = Object.keys(data)[0];
    return { id, ...data[id] };
  }
}