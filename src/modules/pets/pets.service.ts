
import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { CreatePetDto } from './dto/create-pets.dto';

@Injectable()
export class PetsService {
  constructor(@Inject('FIREBASE_APP') private firebaseApp: admin.app.App) { }

  private get db() {
    return this.firebaseApp.database();
  }

  async findAll(species?: string) {
    const snapshot = await this.db.ref('pets').once('value');
    const data = snapshot.val() || {};

    let pets = Object.keys(data).map(key => ({ id: key, ...data[key] }));

    if (species) {
      pets = pets.filter(p => p.species.toLowerCase() === species.toLowerCase());
    }
    return pets;
  }

  async findOne(id: string) {
    const snapshot = await this.db.ref(`pets/${id}`).once('value');
    if (!snapshot.exists()) {
      throw new NotFoundException(`Mascota con ID ${id} no encontrada`);
    }
    return { id: snapshot.key, ...snapshot.val() };
  }



  async create(createPetDto: CreatePetDto) {
    const db = admin.database();

    const newPetRef = db.ref('pets').push();
    await newPetRef.set(createPetDto);

    await db.ref(`locations/${newPetRef.key}`).set({
      lat: -12.046374,
      lng: -77.042793,
      petId: newPetRef.key
    });

    return { id: newPetRef.key, ...createPetDto };
  }

  async updateLocation(petId: string, data: { latitude: number; longitude: number }) {
    const db = admin.database();


    await db.ref(`pets/${petId}`).update({
      latitude: data.latitude,
      longitude: data.longitude,
      lastUpdate: new Date().toISOString()
    });


    await db.ref(`locations/${petId}`).set({
      petId: petId,
      latitude: data.latitude,
      longitude: data.longitude,
      petName: (await db.ref(`pets/${petId}/name`).once('value')).val() || 'Mascota',
      lastUpdate: new Date().toISOString()
    });

    return { success: true };
  }
  async findByOwner(ownerId: string) {
    const db = admin.database();
    const ref = db.ref('pets');

    const snapshot = await ref.orderByChild('ownerId').equalTo(ownerId).once('value');
    const data = snapshot.val();

    if (!data) return [];
    return Object.entries(data).map(([id, value]: [string, any]) => ({
      id,
      ...value,
    }));
  }

  async remove(id: string) {
    const db = admin.database();
    await db.ref(`pets/${id}`).remove();
    await db.ref(`locations/${id}`).remove();
    return { deleted: true };
  }
}