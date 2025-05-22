# Este es un proyecto hecho en nextJS 15 mirando el curso de Fernando Herrera

## Correr en dev

1. Clonar el repositorio
2. Instalar dependencias ```npm install```
3. Crear una copia del ```.env.template``` y renombrar a ``` .env ``` y cambiar los datos respectivos
4. Levantar la base de datos ``` docker compose up -d```
5. Correr las migraciones de Prisma ```npx prisma migrate dev ```.
6. Ejecutar el seed
7. Correr el proyecto ```npm run dev``` o ```node --run dev``` si tienes node 22+.
 