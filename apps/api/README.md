# Threadsparks API

The backend API for Threadsparks, built with Express and TypeScript.

## 🚀 Development

```bash
# 1. Install dependencies
pnpm install

# 2. Copy .env.example to .env
cp .env.example .env

# 3. Start the development server
pnpm dev
```

The API will be available at `http://localhost:3001`.

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express
- **Language**: TypeScript
- **API**: REST
- **Logging**: Winston

## 📁 Project Structure

| Directory | Description |
|-----------|-------------|
| `src/config/` | Configuration files |
| `src/middleware/` | Express middleware |
| `src/routes/` | All route definitions |
| `src/routes/v1/` | API v1 routes |
| `src/controllers/` | All route controllers |
| `src/controllers/v1/` | API v1 controllers |
| `src/services/` | Business logic services |
| `src/types/` | TypeScript type definitions |
| `src/utils/` | Utility functions |
| `src/index.ts` | Server entry point |

## 📝 API Endpoints

### Health Check

```
GET /health
```

**Response:**

```json
{
  "status": "ok",
  "timestamp": "2023-01-01T00:00:00.000Z",
  "version": "1.0.0",
  "environment": "development"
}
```

## 📚 Learn More

- [Express Documentation](https://expressjs.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
