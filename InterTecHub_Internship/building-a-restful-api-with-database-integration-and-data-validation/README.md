documentation from the example you provided. Here's a revised version that is minimal, focused on the core details, and styled cleanly:

markdown
Copy code

<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<h1 align="center">NestJS RESTful API</h1>

<p align="center">
  A progressive Node.js framework for building efficient, scalable, and maintainable backend applications.
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="License" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord" /></a>
</p>

## Features

- **RESTful API** powered by **NestJS**
- Integration with **PostgreSQL** and **TypeORM**
- Comprehensive **data validation** using **class-validator**
- **Authentication and authorization** (JWT)
- **CRUD operations** for books and reviews

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-repository-url
cd your-project-name
2. Install dependencies
bash
Copy code
npm install
3. Set up environment variables
Create a .env file and configure your database connection:

env
Copy code
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your-username
DB_PASSWORD=your-password
DB_NAME=your-database-name
4. Run database migrations
bash
Copy code
npm run migration:run
5. Start the application
Development mode:
bash
Copy code
npm run start:dev
Production mode:
bash
Copy code
npm run start:prod
```
