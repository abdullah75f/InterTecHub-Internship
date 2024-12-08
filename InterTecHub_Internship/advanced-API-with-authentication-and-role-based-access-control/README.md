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

- **To create a user from the browser**:
  open console on inspect developer tool and run

```json
fetch("https://your-api-endpoint.com/auth/signup", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        "email": "john.doe@example.com",
        "password": "securePassword123",
        "name": "John Doe",
        "role": "user"
    }),
    credentials: 'include'
})
.then(response => response.json())
.then(data => console.log("Response:", data))
.catch(error => console.error("Error:", error));
```

- **URL**: `/auth/signup`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "email": "john.doe@example.com",
    "password": "securePassword123",
    "name": "John Doe",
    "role": "user" // or 'admin'
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

### 2. **Login a User**

- **To login a user from the browser**:
  open console on inspect developer tool and run

```json
fetch("https://your-api-endpoint.com/auth/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        "email": "john.doe@example.com",
        "password": "securePassword123"
    }),
    credentials: 'include'  // This is important for sending cookies or tokens
})
.then(response => response.json())
.then(data => console.log("Response:", data))
.catch(error => console.error("Error:", error));
```

- **URL**: `/auth/login`
- **Method**: `POST`
- **Request Body**:
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

- **To create a book from the browser**:
  open console on inspect developer tool and run

````json

## 🚀 **Endpoints**

### 1. **Create a New Book**

- **To create a book from the browser**:
  open console on inspect developer tool and run

```json
fetch("https://intertechub-internship-7.onrender.com/books", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
  "title": "To Kill a Mockingbird",
  "isbn": "9780061120084",
  "author": "Harper Lee",
  "publishedYear": 1960
}),
})
.then(response => response.json())
.then(data => console.log("Response:", data))
.catch(error => console.error("Error:", error));
````

- **URL**: `/books`
- **Method**: `POST`
- **Request Body**:
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

**URL**: `/books`
**Method**: `GET`
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

**URL**: `/books/:bookId`
**Method**: `GET`
**URL Params**:
`bookId: ID of the book to retrieve.`
**Response Body**:

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

- **To update a book from the browser**:
  open console on inspect developer tool and run

```json
fetch("https://intertechub-internship-7.onrender.com/books/:ID_OF_BOOK", {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: "New Book Title",
    publishedYear: 2024
  })
})
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

```

**URL**: `/books/:bookId`
**Method**: `PUT`
**URL Params**:
`bookId: ID of the book to update.`
**Response Body**:

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

### 5. Delete a Book

- **To delete a book from the browser**:
  open console on inspect developer tool and run

```json
fetch("https://intertechub-internship-7.onrender.com/books/:ID_OF_BOOK", {
  method: 'DELETE',
})
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to delete');
  })
  .then(data => {
    console.log('Deleted:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

**URL**: `/books/:bookId`
**Method**: `DELETE`
**URL Params**:
`bookId: ID of the book to delete.`
**Response**:

```json
{
  "statusCode": 200,
  "message": "Book with ID 29 deleted successfully"
}
```

### 6. Create a Review for a Book

- **To create a review on a book from the browser**:
  open console on inspect developer tool and run

```json
fetch("https://intertechub-internship-7.onrender.com/reviews/:ID_OF_BOOK", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: "Abdullah",
    rating: 4,
    comment: "Very Good"
  })
})
  .then(response => response.json())
  .then(data => {
    console.log('Review Created:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

```

**URL**: `/books/:bookId/reviews`
**Method**: `POST`
**URL Params**:
`bookId: ID of the book to which the review will be added.`
**Request Body**:

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

**URL**: `/reviews`
**Method**: `GET`
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

- **URL**: `/books`
- **Method**: `POST`
- **Request Headers**:
  `Content-Type: application/json`
  `Authorization: Bearer your_jwt_token_here`
- **Request Body**:

  ````json
  {
    "title": "Pride and Prejudice",
    "isbn": "9780141439518",
    "author": "Jane Austen",
    "publishedYear": 1813
  }```

  ````

- **Response**:

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

**URL**: `/books`
**Method**: `GET`
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

**URL**: `/books/:bookId`
**Method**: `GET`
**URL Params**:
`bookId: ID of the book to retrieve.`
**Authorization**: `Bearer your_jwt_token_here`
**Response Body**:

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

- **To update a book from the browser**:
  open console on inspect developer tool and run

```json
fetch("https://intertechub-internship-7.onrender.com/books/:ID_OF_BOOK", {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your_jwt_token_here' // Include the JWT token for authentication
  },
  body: JSON.stringify({
    title: "New Book Title",
    publishedYear: 2024
  })
})
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

```

**URL**: `/books/:bookId`
**Method**: `PUT`
**URL Params**:
`bookId: ID of the book to update.`
**Request Headers**:
`Content-Type: application/json`
`Authorization: Bearer your_jwt_token_here`
**Response Body**:

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

### 5. Delete a Book

- **To delete a book from the browser**:
  open console on inspect developer tool and run

```json
fetch("https://intertechub-internship-7.onrender.com/books/:ID_OF_BOOK", {
  method: 'DELETE',
  headers: {
    'Authorization': 'Bearer your_jwt_token_here' // Include the JWT token for authentication
  }
})
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to delete');
  })
  .then(data => {
    console.log('Deleted:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

**URL**: `/books/:bookId`
**Method**: `DELETE`
**URL Params**:
`bookId: ID of the book to delete.`
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
  open console on inspect developer tool and run

```json
fetch("https://intertechub-internship-7.onrender.com/reviews/:ID_OF_BOOK", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your_jwt_token_here' // Include the JWT token for authentication
  },
  body: JSON.stringify({
    name: "Abdullah",
    rating: 4,
    comment: "Very Good"
  })
})
  .then(response => response.json())
  .then(data => {
    console.log('Review Created:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

```

**URL**: `/books/:bookId/reviews`
**Method**: `POST`
**URL Params**:
`bookId: ID of the book to which the review will be added.`
**Authorization**: `Bearer your_jwt_token_here`

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

**URL**: `/reviews`
**Method**: `GET`
**Authorization**: `Bearer your_jwt_token_here`
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
