# Threadsparks 

A community-driven platform for sharing and discovering descriptions, powered by modern web technologies.

## 🛠️ Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, TypeScript
- **Package Manager**: pnpm
- **Linting/Formatting**: Biome

## 📦 Prerequisites

- Node.js 18+
- pnpm 8+

## 🚀 Getting Started

```bash
# 1. Copy the API server .env.example file to .env
cp apps/api/.env.example apps/api/.env

# 2. Install all the dependencies in the monorepo
pnpm install

# 3. Start both the frontend and backend servers parallelly
pnpm dev
```

The frontend will be available at  `http://localhost:3000` and the backend at `http://localhost:3001`.

## 🏗️ Project Structure

| Source | Description |
|---------------|-------------|
| [`apps/api`](apps/api) | The Backend API server |
| [`apps/web`](apps/web) | The Frontend Next.js application |
| [`packages/shared`](packages/shared) | Shared code and types between the frontend and backend |

For a detailed view of all files and directories, explore the repository directly.
