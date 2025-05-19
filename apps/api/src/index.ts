import express, { type Express, type Request, type Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { config } from "@/config";
import { errorHandler, notFoundHandler } from "@/middleware/error.middleware";
import { logger } from "@/utils/logger";

// Import routes
import v1Router from "@/routes/v1";
import exampleRouter from "@/routes/example";

const app: Express = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging
if (config.env !== "test") {
	app.use(morgan("dev"));
}

// API Routes
app.use("/api/v1", v1Router);
app.use("/api", exampleRouter);

// Health check
app.get("/health", (_req: Request, res: Response) => {
	res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

// 404 Handler
app.use(notFoundHandler);

// Error Handler
app.use(errorHandler);

const PORT: number | string = config.port || 3000;

const server = app.listen(PORT, () => {
	logger.info(`Server running on port ${PORT}`);
	logger.info(`Environment: ${config.env}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err: Error) => {
	logger.error(`Error: ${err.message}`);
	// Close server & exit process
	server.close(() => process.exit(1));
});

export default app;
