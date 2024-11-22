# Building a RESTful API with NestJS and PostgreSQL

This project demonstrates how to build a RESTful API using **NestJS**, **TypeORM**, and **PostgreSQL** to manage books, reviews, and users. It provides endpoints to perform CRUD operations on books, associate reviews with books, and manage users.

## Features

- **CRUD Operations** for Books
- **User Management** for adding authors and reviewers
- **Review System** to add ratings and comments for books
- **TypeORM** as the ORM for database interaction with PostgreSQL
- **Data Validation** using DTOs and class-validator

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient and scalable applications.
- **TypeORM**: An ORM for TypeScript and JavaScript (ES7, ES6, ES5).
- **PostgreSQL**: A powerful, open-source relational database system.
- **class-validator**: Validation library for TypeScript and JavaScript.
- **class-transformer**: A library to transform plain objects into class objects.

## Setup

### Prerequisites

- Node.js >= 14
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/project-name.git
   cd project-name
   Install dependencies:
   ```

bash
Copy code
npm install
Set up your environment variables in a .env file: Create a .env file in the root directory and add your PostgreSQL credentials:

env
Copy code
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your-username
DB_PASSWORD=your-password
DB_NAME=your-database-name
Run migrations to set up the database:

bash
Copy code
npm run migration:run
Start the application:

bash
Copy code
npm run start:dev
The API should now be running on http://localhost:3000.

API Endpoints
Books
Get all books: GET /books

Fetches all books from the database.
Get a single book: GET /books/:id

Fetches a single book by its id.
Create a new book: POST /books

Body:
json
Copy code
{
"title": "Book Title",
"author": "Author Name",
"publishedYear": 2024,
"genre": "Fiction"
}
Update an existing book: PUT /books/:id

Body:
json
Copy code
{
"title": "Updated Book Title",
"author": "Updated Author Name",
"publishedYear": 2025,
"genre": "Non-Fiction"
}
Delete a book: DELETE /books/:id

Deletes a book from the database.
Reviews
Get all reviews for a book: GET /books/:id/reviews

Fetches all reviews associated with a book.
Create a new review: POST /books/:id/reviews

Body:
json
Copy code
{
"rating": 5,
"comment": "Amazing book!",
"userId": 1
}
Update a review: PUT /reviews/:id

Body:
json
Copy code
{
"rating": 4,
"comment": "Good book, but could be improved."
}
Delete a review: DELETE /reviews/:id

Deletes a review from the database.
Users
Get all users: GET /users

Fetches all users.
Create a new user: POST /users

Body:
json
Copy code
{
"name": "John Doe",
"email": "john@example.com"
}
Update an existing user: PUT /users/:id

Body:
json
Copy code
{
"name": "Updated Name",
"email": "updated-email@example.com"
}
Delete a user: DELETE /users/:id

Deletes a user from the database.
Project Structure
src
books: Contains all logic related to books and reviews.
books.controller.ts: Handles HTTP requests related to books.
books.service.ts: Contains business logic for books and reviews.
books.repository.ts: Interacts with the database for book operations.
users: Contains logic for user management.
users.controller.ts: Handles user-related HTTP requests.
users.service.ts: Contains business logic for users.
users.repository.ts: Handles database operations related to users.
reviews: Manages review operations.
reviews.controller.ts: Handles review-related HTTP requests.
reviews.service.ts: Contains business logic for reviews.
reviews.repository.ts: Interacts with the database for reviews.
common: Contains shared utilities and configurations like DTOs.
Database Schema
Books
id (Primary Key)
title (String)
author (String)
publishedYear (Integer)
genre (String)
Users
id (Primary Key)
name (String)
email (String, unique)
Reviews
id (Primary Key)
rating (Integer)
comment (Text)
bookId (Foreign Key to Books)
userId (Foreign Key to Users)
Migrations
Create Book Table: This migration creates the books table with the necessary fields.
Create User Table: This migration creates the users table with name and email.
Create Review Table: This migration creates the reviews table with rating, comment, and foreign keys to the books and users tables.
License
This project is licensed under the MIT License - see the LICENSE file for details.

markdown
Copy code

### Key Sections:

1. **Setup**: Clear installation and setup instructions.
2. **API Endpoints**: Provides detailed information about each available endpoint.
3. **Project Structure**: Explanation of the folder structure, controllers, services, and repositories.
4. **Database Schema**: Describes the database tables and their relations.
5. **Migrations**: Provides a summary of migrations executed in the project.

Feel free to customize and expand based on your actual setup and features.
