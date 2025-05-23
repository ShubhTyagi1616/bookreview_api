# 📚 Book Review API

A RESTful API built with **Node.js**, **Express.js**, **bcrypt(password hashing)**, **json web tokens**,  and **MongoDB**, enabling users to register, log in, add books, post reviews, and search for books. JWT-based authentication is implemented to secure protected routes.

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (JSON Web Tokens) for authentication
- bcryptjs for password hashing
- dotenv for managing environment variables

---

## ⚙️ Project Setup Instructions

### 1. Clone the Repository:

```bash
git clone https://github.com/<your-username>/book-review-api.git
cd book-review-api

## Install Dependencies:

   npm install


## Create .env File:
   Create a .env file in the root directory with the following content:
   PORT=5000
   MONGODB_URI=mongodb+srv://<your-db-uri>
   JWT_SECRET=your_jwt_secret

## Start the Server:
   npm start

Server will run on: http://localhost:5000

🧪 How to Run Locally:
## Ensure you have MongoDB running locally or use MongoDB Atlas:

   Fill in your .env file as shown above.

   Run npm start to start the Express server.

   Use Postman or cURL to test the API.


## API Endpoints (Postman Examples):
   Base URL: http://localhost:5000/api

## Authentication
   Signup: POST /signup
{
  "username": "john_doe",
  "password": "securepass"
}
Login:
      bash:
      POST /login

      json
      {
        "username": "john_doe",
        "password": "securepass"
      }
Returns a JWT token:

      json
      {
        "token": "your_jwt_token"
      }

📚 Books
Add a New Book (Auth Required)

    bash:
    POST /books
    Headers: Authorization: Bearer <token>

    json
    {
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "genre": "Fiction",
    "description": "A novel about destiny and dreams."
    }

## Get All Books

    bash:
    GET /books?page=1&limit=10&author=paulo&genre=fiction

## Get Book by ID
    bash
    GET /books/:id

Returns book details, average rating, and paginated reviews.

📝 Reviews
Submit a Review (Auth Required)

    bash:
    POST /books/:id/reviews
    Headers: Authorization: Bearer <token>

    json
    {
      "rating": 5,
      "comment": "Inspiring story!"
    }


## Update Your Review

    bash:
    PUT /reviews/:id
    Headers: Authorization: Bearer <token>

    json:
    {
      "rating": 4,
      "comment": "Updated review text."
    }


## Delete Your Review

    bash:
    DELETE /reviews/:id
    Headers: Authorization: Bearer <token>


🔍 Search
##  Search Books by Title or Author

    sql:
    GET /search?q=alchemist


## Features
   1. JWT-based authentication

   2. User signup and login

   3. Book CRUD (Create & Read)

   4. Review management (one review per user per book)

   5. Paginated endpoints

   6. Book search (partial match on title/author)


## Database Schema Overview

   ## User Model:
        {
          username: String, // unique, required
          password: String  // hashed, required
        }

   ## Book Model
        {
          title: String,     // required
          author: String,
          genre: String,
          description: String
        }

  ## Review Model
        {
          user: ObjectId,     // ref: 'User'
          book: ObjectId,     // ref: 'Book'
          rating: Number,     // required, 1–5
          comment: String,
          timestamps: true
        }
