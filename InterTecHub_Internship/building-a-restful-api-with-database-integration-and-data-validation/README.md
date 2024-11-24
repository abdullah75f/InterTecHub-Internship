# 🛠️ **Setting Up Your Project**

Follow the steps below to set up and run the application.

# 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-repository-url
cd your-project-name
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


This Markdown file is styled for clarity, with sections separated by headers, code blocks highlighted, and steps clearly outlined for easy reading and execution.





```

# 📚 **Books API**

This API is built using **NestJS** and provides endpoints to perform CRUD (Create, Read, Update, Delete) operations on **Books** and their associated **Reviews**.

## 🚀 **Endpoints**

### 1. **Create a New Book**

- **To create a book from the browser**:
  open console on inspect developer tool and run

```json
etch("https://intertechub-internship-7.onrender.com/books", {
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
```

- **URL**: `/books`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "title": "string",
    "author": "string",
    "description": "string"
  }
  ```
  **Response**:

```json
{
  "id": 1,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "description": "A novel about the American dream."
}
```

### 2. **\*Get All Books**

**URL**: /books
**Method**:: GET
**Request Body**:

```json
[
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "description": "A novel about the American dream."
  },
  {
    "id": 2,
    "title": "Moby Dick",
    "author": "Herman Melville",
    "description": "A novel about a sea captain's obsession with a white whale."
  }
]
```

### 3. **_Get a Single Book_**

**URL**: /books/:bookId
**Method**: GET
**URL Params**:
bookId: ID of the book to retrieve.
**Request Body**:

```json
{
  "id": 1,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "description": "A novel about the American dream."
}
```

### 4. Update a Book

**URL**: /books/:bookId
**Method**: PUT
**URL Params**:
bookId: ID of the book to update.
**Request Body**:

```json
{
  "title": "Updated Book Title",
  "author": "Updated Author",
  "description": "Updated description"
}
```

**Response**:

```json
{
  "id": 1,
  "title": "The Great Gatsby - Updated",
  "author": "F. Scott Fitzgerald",
  "description": "An updated description."
}
```

### 5. Delete a Book

**URL**: /books/:bookId
**Method**: DELETE
**URL Params**:
bookId: ID of the book to delete.
**Response**:

```json
{
  "message": "Book deleted successfully"
}
```

### 6. Create a Review for a Book

**URL**: /books/:bookId/reviews
**Method**: POST
**URL Params**:
bookId: ID of the book to which the review will be added.
**Request Body**:

```json
{
  "review": "Amazing book! A must-read for everyone.",
  "rating": 5
}
```

**Response**:

```json
{
  "id": 1,
  "bookId": 1,
  "review": "Incredible book, highly recommended!",
  "rating": 5
}
```
