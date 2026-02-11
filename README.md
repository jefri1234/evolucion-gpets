# 🐾 G-Pets API - Sistema de Gestión de Mascotas

Este es el servicio Backend desarrollado con **NestJS** para la plataforma G-Pets. El sistema centraliza la lógica de negocio, la seguridad y el acceso a datos en tiempo real.

## 📋 Requisitos Previos
* **Node.js**: v20 o superior.
* **Firebase**: Proyecto activo con Realtime Database.
* **Docker**: Instalado para el empaquetado de la aplicación.

## ⚙️ Configuración del Entorno (.env)
Crea un archivo llamado `.env` en la raíz del proyecto y completa la siguiente información extraída de tu consola de Firebase:

```env
# Firebase Admin SDK Configuration
FIREBASE_PROJECT_ID="gpets-backend-reto"
FIREBASE_CLIENT_EMAIL="firebase-adminsdk-fbsvc@gpets-backend-reto.iam.gserviceaccount.com"
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nTU_LLAVE_PRIVADA_AQUI\n-----END PRIVATE KEY-----\n"
FIREBASE_DATABASE_URL="[https://gpets-backend-reto-default-rtdb.firebaseio.com/](https://gpets-backend-reto-default-rtdb.firebaseio.com/)"

# App Config
PORT=3000

