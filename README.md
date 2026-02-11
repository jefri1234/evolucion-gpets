# 🐾 G-Pets API - Sistema de Gestión de Mascotas

Este es el servicio Backend desarrollado con **NestJS** para la plataforma G-Pets. El sistema centraliza la lógica de negocio, la seguridad y el acceso a datos en tiempo real.

## 📋 Requisitos Previos
* **Node.js**: v20 o superior.
* **Firebase**: Proyecto activo con Realtime Database.
* **Docker**: Instalado para el empaquetado de la aplicación.

## ⚙️ Configuración del Entorno (.env)
Crea un archivo llamado `.env` en la raíz del proyecto y completa la siguiente información : `importante` las variables entorno sin comillas.

```envcls
# Firebase Admin SDK Configuration
FIREBASE_PROJECT_ID=gpets-backend-reto
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-fbsvc@gpets-backend-reto.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nTU_LLAVE_PRIVADA_AQUI\n-----END PRIVATE KEY-----\n
FIREBASE_DATABASE_URL=[https://gpets-backend-reto-default-rtdb.firebaseio.com/](https://gpets-backend-reto-default-rtdb.firebaseio.com/)
```

## 🛠️ Instalación y Ejecución
Localmente
* Instalar dependencias:
```env
npm install
```
* Ejecutar en modo desarrollo:
```env
npm run start:dev
```
### Con Docker:
* Construir la imagen:
```env
docker build -t gpets-backend .
```
* Ejecutar el contenedor:
```env
docker run -p 3000:3000 --env-file .env gpets-backend
```
## Documentación de la API
Una vez que el servidor esté corriendo, puedes acceder a la documentación interactiva (Swagger) en:
```env
http://localhost:3000/docs
```
# Endpoints Principales:

## Owners:

* POST /owners: Registro de nuevos dueños con datos complementarios (teléfono, dirección).
* GET /owners/by-email/:email: Recuperación de perfil por email.
## Pets:
* GET /pets: Listado de mascotas con soporte para filtros.
* GET /pets/:id: Detalle completo de una mascota.
* POST /pets: Registro de nuevas mascotas vinculadas al dueño.
* PATCH /pets/:id/location: Actualización de coordenadas en tiempo real.