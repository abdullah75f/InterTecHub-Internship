# InterTecHub

<span style="font-size:larger;">Check out - <a href="https://intertechub-internship.onrender.com">https://intertechub-internship.onrender.com</a></span>

# 🛠️ **Setting Up Your Project**

Follow the steps below to set up and run the application.

# 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/abdullah75f/InterTecHub-Internship.git
cd InterTecHub_Internship
cd advanced-API-with-authentication-and-role-based-access-control

2. Install Dependencies
Next, install the required dependencies:
npm install
3. Set Up Environment Variables
Create a .env file in the root of your project and configure your database connection:

.env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your-username
DB_PASSWORD=your-password
DB_NAME=your-database-name

4. Start the Application
You can run the application in either development or production mode.

Development Mode (for local development):
npm run start:dev

Production Mode (for production deployment):
npm run start:prod
Enjoy building your project! 🎉


```

# 📚 **Users Auth API**

This API is built using **NestJS** and provides endpoints to perform signup and login operations on **Users**.

## 🚀 **Endpoints**

### 1. **Create a New User**

- **To create a user from Postman:**:
  1- Open Postman.
  2- Create a new POST request.
  3- Set the URL to `https://intertechub-internship.onrender.com/auth/signup`
  4- Set the request headers:
  **Content-Type**: `application/json`
  5- Set the request body to raw JSON:
  `json
  {
  "email": "john.doe@example.com",
  "password": "securePassword123",
  "name": "John Doe",
  "role": "user" // or 'admin'
  }
  ``

6-Send the request.
**URL**: `/auth/signup`
**Method**: `POST`
**Request Body**:

`````json
            {
      "email": "john.doe@example.com",
      "password": "securePassword123",
      "name": "John Doe",
      "role": "user" // or 'admin'
            }````
`````

**Response**:

```json
{
  "user": {
    "id": 1,
    "email": "john.doe@example.com",
    "name": "John Doe",
    "role": "user",
    "createdAt": "2024-11-24T19:08:51.408Z"
  },
  "token": "your_jwt_token_here"
}
```

### 2. **Login a User**

- **To login a user from the browser**:

  1- Open Postman.
  2- Create a new POST request.
  3- Set the URL to `https://intertechub-internship.onrender.com/auth/login`
  4- Set the request headers:
  **Content-Type**: `application/json`
  5- Set the request body to raw JSON:

  ```json
  {
    "email": "john.doe@example.com",
    "password": "securePassword123"
  }
  ```

  6-Send the request.
  **URL**: `/auth/login`
  **Method**: `POST`
  **Request Body**:

  ```json
  {
    "email": "john.doe@example.com",
    "password": "securePassword123"
  }
  ```

**Response**:

```json
{
  "user": {
    "id": 1,
    "email": "john.doe@example.com",
    "name": "John Doe",
    "role": "user",
    "createdAt": "2024-11-24T19:08:51.408Z"
  },
  "token": "your_jwt_token_here"
}
```

# 📚 **Books API**

This API is built using **NestJS** and provides endpoints to perform CRUD (Create, Read, Update, Delete) operations on **Books** and their associated **Reviews**.

## 🚀 **Endpoints**

### 1. **Create a New Book**

**To create a book from Postman:**:

1- Open Postman.
2- Create a new POST request.
3- Set the URL to `https://intertechub-internship.onrender.com/books`
4- Set the request headers:
**Content-Type**: `application/json`
**Authorization**: `Bearer your_jwt_token_here`

5- Set the request body to raw JSON:

```json
{
  "title": "To Kill a Mockingbird",
  "isbn": "9780061120084",
  "author": "Harper Lee",
  "publishedYear": 1960
}
```

6-Send the request.
**URL**: `/books`
**Method**: `POST`
**RequestHeaders**:
**Content-Type**: `application/json`
**Authorization**: `Bearer your_jwt_token_here`
**Request Body**:

```json
{
  "title": "Pride and Prejudice",
  "isbn": "9780141439518",
  "author": "Jane Austen",
  "publishedYear": 1813
}
```

**Response**:

```json
{
  "statusCode": 201,
  "message": "Book created successfully",
  "data": {
    "title": "Pride and Prejudice",
    "isbn": "9780141439518",
    "author": "Jane Austen",
    "publishedYear": 1813,
    "id": 29,
    "createdAt": "2024-11-24T19:08:51.408Z"
  }
}
```

### 2. **Get All Books**

**To get all books from Postman:**:

1- Open Postman.
2- Create a new GET request.
3- Set the URL to `https://intertechub-internship.onrender.com/books`
4- Set the request headers:
**Authorization**: `Bearer your_jwt_token_here`

5-Send the request.
**URL**: `/books`
**Method**: `GET`
**RequestHeaders**:
**Authorization**: `Bearer your_jwt_token_here`
**Response**:

```json
{
  "statusCode": 200,
  "message": "Books retrieved successfully",
  "data": [
    {
      "id": 25,
      "title": "To Kill a Mockingbird",
      "isbn": "9780061120084",
      "author": "Harper Lee",
      "publishedYear": 1960,
      "createdAt": "2024-11-24T19:06:30.376Z"
    },
    {
      "id": 26,
      "title": "1984",
      "isbn": "9780451524935",
      "author": "George Orwell",
      "publishedYear": 1949,
      "createdAt": "2024-11-24T19:07:56.855Z"
    },
    {
      "id": 27,
      "title": "Moby-Dick",
      "isbn": "9780142437247",
      "author": "Herman Melville",
      "publishedYear": 1851,
      "createdAt": "2024-11-24T19:08:17.077Z"
    },
    {
      "id": 28,
      "title": "The Great Gatsby",
      "isbn": "9780743273565",
      "author": "F. Scott Fitzgerald",
      "publishedYear": 1925,
      "createdAt": "2024-11-24T19:08:35.559Z"
    },
    {
      "id": 29,
      "title": "Pride and Prejudice",
      "isbn": "9780141439518",
      "author": "Jane Austen",
      "publishedYear": 1813,
      "createdAt": "2024-11-24T19:08:51.408Z"
    },
    {
      "id": 30,
      "title": "Moby-Dick",
      "isbn": "9780142437247",
      "author": "Herman Melville",
      "publishedYear": 1851,
      "createdAt": "2024-11-24T19:12:35.693Z"
    }
  ]
}
```

### 3. **_Get a Single Book_**

**To get a single book from Postman:**:

1- Open Postman.
2- Create a new POST request.
3- Set the URL to `https://intertechub-internship.onrender.com/books`
4- Set the request headers:
**Authorization**: `Bearer your_jwt_token_here`

6-Send the request.
**URL**: `/books/:bookId`
**Method**: `GET`
**RequestHeaders**:
**Authorization**: `Bearer your_jwt_token_here`

**Response**:

```json
{
  "statusCode": 200,
  "message": "Books retrieved successfully",
  "data": {
    "id": 30,
    "title": "Moby-Dick",
    "isbn": "9780142437247",
    "author": "Herman Melville",
    "publishedYear": 1851,
    "createdAt": "2024-11-24T19:12:35.693Z"
  }
}
```

### 4. Update a Book

- **To update a book from Postman:**:

1- Open Postman.
2- Create a new PUT request.
3- Set the URL to `https://intertechub-internship.onrender.com/books/:bookId`
4- Set the request headers:
**Content-Type**: `application/json`
**Authorization**: `Bearer your_jwt_token_here`

5- Set the request body to raw JSON:

```json
{
  "title": "New Book Title",
  "publishedYear": 2024
}
```

6-Send the request.
**URL**: `/books/:bookId`
**Method**: `PUT`
**RequestHeaders**:
**Content-Type**: `application/json`
**Authorization**: `Bearer your_jwt_token_here`
**Request Body**:

```json
{
  "id": 30,
  "title": "New Book Title",
  "isbn": "9780142437247",
  "author": "Herman Melville",
  "publishedYear": 2024,
  "createdAt": "2024-11-24T19:12:35.693Z"
}
```

**Response**:

```json
{
  "statusCode": 201,
  "message": "Book created successfully",
  "data": {
    "title": "Pride and Prejudice",
    "isbn": "9780141439518",
    "author": "Jane Austen",
    "publishedYear": 1813,
    "id": 29,
    "createdAt": "2024-11-24T19:08:51.408Z"
  }
}
```

### 5. Delete a Book

- **To delete a book from the browser**:

1- Open Postman.
2- Create a new DELETE request.
3- Set the URL to `https://intertechub-internship.onrender.com/books/:bookId`
4- Set the request headers:
**Authorization**: `Bearer your_jwt_token_here`
5-Send the request.
**URL**: `/books/:bookId`
**Method**: `DELETE`
**RequestHeaders**:
**Authorization**: `Bearer your_jwt_token_here`
**Response**:

```json
{
  "statusCode": 200,
  "message": "Book with ID 29 deleted successfully"
}
```

### 6. Create a Review for a Book

- **To create a review on a book from the browser**:

  1- Open Postman.
  2- Create a new POST request.
  3- Set the URL to `https://intertechub-internship.onrender.com/reviews/:bookId`
  4- Set the request headers:
  **Content-Type**: `application/json`
  **Authorization**: `Bearer your_jwt_token_here`
  5- Set the request body to raw JSON:

  ```json
  {
    "name": "Abdullah",
    "rating": 4,
    "comment": "Very Good"
  }
  ```

  ``                                                                  6-Send the request.
**URL**:`/reviews/:bookId`
**Method**:`POST`**request headers**:
  **Content-Type**:`application/json`  **Authorization**:`Bearer your_jwt_token_here`
  **Request Body**:

  ```json
  {
    "name": "Abdullah",
    "rating": 4,
    "comment": "Very Good"
  }
  ```

``

**Response**:

```json
{
  "rating": 4,
  "comment": "Very Good",
  "book": {
    "id": 25,
    "title": "To Kill a Mockingbird",
    "isbn": "9780061120084",
    "author": "Harper Lee",
    "publishedYear": 1960,
    "createdAt": "2024-11-24T19:06:30.376Z"
  },
  "user": {
    "id": 11,
    "name": "Abdullah",
    "createdAt": "2024-11-24T20:00:11.000Z"
  },
  "id": 13,
  "createdAT": "2024-11-24T20:00:11.306Z"
}
```

### 7. **Get All Reviews**

1- Open Postman.
2- Create a new GET request.
3- Set the URL to `https://intertechub-internship.onrender.com/reviews`
4- Set the request headers:
**Authorization**: `Bearer your_jwt_token_here`

6-Send the request.
**URL**:`/review`
**Method**:`GET`
**request headers**:
**Authorization**:`Bearer your_jwt_token_here`

**Response**:

```json
{
  "statusCode": 200,
  "message": "Reviews retrieved successfully",
  "data": [
    {
      "id": 13,
      "rating": 4,
      "comment": "Very Good",
      "createdAT": "2024-11-24T20:00:11.306Z",
      "user": {
        "id": 11,
        "name": "Abdullah",
        "createdAt": "2024-11-24T20:00:11.000Z"
      }
    }
  ]
}
```

### 8. **Get All Reviews**

1- Open Postman.
2- Create a new GET request.
3- Set the URL to `https://intertechub-internship.onrender.com/books/recommendations`
4- Set the request headers:
**Authorization**: `Bearer your_jwt_token_here`

6-Send the request.
**URL**:`/books/recommendations`
**Method**:`GET`
**request headers**:
**Authorization**:`Bearer your_jwt_token_here`
**Response**:

````json

{
  "statusCode": 200,
  "message": "Recommendations retrieved successfully",
  "data": [
    {
      "id": 31,
      "title": "The Catcher in the Rye",
      "isbn": "9780316769488",
      "author": "J.D. Salinger",
      "publishedYear": 1951,
      "createdAt": "2024-11-24T19:15:35.693Z"
    },
    {
      "id": 32,
      "title": "Brave New World",
      "isbn": "9780060850524",
      "author": "Aldous Huxley",
      "publishedYear": 1932,
      "createdAt": "2024-11-24T19:16:35.693Z"
    }
  ]
}```


````
