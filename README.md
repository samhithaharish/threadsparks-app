# Threadsparks 

A community-driven platform for sharing and discovering descriptions, powered by modern web technologies.

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, TypeScript
- **Package Manager**: pnpm
- **Linting/Formatting**: Biome

## 📦 Prerequisites

- Node.js 18+
- pnpm 8+

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/threadsparks.git
cd threadsparks
```

### 2. Install dependencies

For the web application:
```bash
cd web
pnpm install
```

For the API server:
```bash
cd ../api
pnpm install
```

### 3. Set up environment variables

Create a `.env` file in both `web` and `api` directories based on the provided `.env.example` files.

### 4. Start the development servers

In separate terminal windows:

For the web application:
```bash
cd web
pnpm dev
```

For the API server:
```bash
cd api
pnpm dev
```

Visit `http://localhost:3000` to view the application.

## 🏗️ Project Structure

```
threadsparks/
├── api/               # Express API server
│   ├── src/           # Source code
│   └── ...
├── web/              # Next.js frontend
│   ├── src/           # Source code
│   └── ...
└── README.md         # This file
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ by the Threadsparks community
- Special thanks to all contributors
