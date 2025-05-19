# Express TypeScript API

A modern Express.js API with TypeScript, ESLint, Prettier, and Winston logging.

## Features

- TypeScript support
- API versioning
- Environment configuration
- Request validation
- Logging with Winston
- Error handling
- ESLint and Prettier for code quality
- Path aliases with `@/`

## Project Structure

```
src/
├── config/           # Configuration files
├── controllers/      # Route controllers
│   └── v1/           # API v1 controllers
├── middleware/       # Express middleware
├── routes/           # Route definitions
│   └── v1/           # API v1 routes
├── services/         # Business logic
├── types/            # TypeScript type definitions
├── utils/            # Utility classes and functions
├── index.ts          # Application entry point
```

## API Documentation

### Health Check

```
GET /health
```

Response:

```json
{
  "status": "ok",
  "timestamp": "2023-01-01T00:00:00.000Z",
  "version": "1.0.0",
  "environment": "development"
}
```
