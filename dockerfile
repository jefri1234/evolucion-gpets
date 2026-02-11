# Etapa 1: Construcción
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Ejecución
FROM node:20-alpine
WORKDIR /app
# Copiamos solo lo necesario del builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Exponemos el puerto de NestJS
EXPOSE 3000

# Comando para arrancar la app
CMD ["node", "dist/main"]