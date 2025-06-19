# EZCart Backend

E-commerce backend API built with Node.js and Express.

## Environment Variables

The following environment variables need to be set:

- `PORT`: Server port (default: 5000)
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation

## API Endpoints

### Authentication
- POST /api/auth/register - Register new user
- POST /api/auth/login - User login
- GET /api/auth/me - Get current user info (requires authentication) 