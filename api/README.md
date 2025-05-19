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

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
pnpm install
```

3. Copy `.env.example` to `.env` and update the values:

```bash
cp .env.example .env
```

### Development

To run the development server:

```bash
pnpm dev
```

The server will be available at `http://localhost:3000`

### Building for Production

```bash
pnpm build
pnpm start
```

### Available Scripts

- `dev`: Start development server with hot-reload
- `build`: Build the application
- `start`: Start the production server
- `lint`: Lint the codebase
- `format`: Format the codebase with Prettier

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

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
