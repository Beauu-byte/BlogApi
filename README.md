# Blog API with Authentication & Authorization

A robust RESTful API for a blog application with comprehensive authentication and authorization features built with Node.js, Express, and MongoDB.

## Features

### 🔐 Authentication & Authorization
- **User Registration** - Secure user registration with email validation
- **User Login** - JWT-based authentication
- **Protected Routes** - Authorization middleware for secure endpoints
- **Password Security** - Bcrypt password hashing
- **Token Management** - JWT tokens with expiration

### 📝 Blog Features
- **Create Posts** - Authenticated users can create blog posts
- **View Posts** - Public access to view all posts
- **Comments** - Authenticated users can comment on posts
- **Likes/Unlikes** - Authenticated users can like/unlike posts

## API Endpoints

### Authentication Routes
- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Login user

### Blog Routes (Protected)
- `POST /api/v1/posts/create` - Create a new post
- `POST /api/v1/comments/create` - Create a comment
- `POST /api/v1/likes/like` - Like a post
- `POST /api/v1/likes/unlike` - Unlike a post
- `GET /api/v1/dummyroute` - Protected test route


## Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **Dotenv** - Environment variable management

## Project Structure

```
blogApp/
├── config/
│   └── database.js
├── controllers/
│   ├── authController.js
│   ├── commentController.js
│   ├── likeController.js
│   └── postController.js
├── middleware/
│   └── auth.js
├── models/
│   ├── commentModel.js
│   ├── likeModel.js
│   ├── postModel.js
│   └── userModel.js
├── routes/
│   ├── authRoutes.js
│   └── blog.js
├── index.js
└── package.json
```

## Security Features

- ✅ JWT-based authentication
- ✅ Password hashing with bcrypt
- ✅ Protected routes with middleware
- ✅ Input validation
- ✅ Error handling
- ✅ Environment variable management
