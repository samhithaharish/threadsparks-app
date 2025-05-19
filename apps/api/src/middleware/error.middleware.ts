import type { Request, Response, NextFunction } from "express";
import { logger } from "@/utils/logger";

interface IError extends Error {
	statusCode?: number;
	status?: string;
	isOperational?: boolean;
	code?: number;
	stack?: string;
}

export class ApiError extends Error {
	statusCode: number;
	status: string;
	isOperational: boolean;

	constructor(statusCode: number, message: string) {
		super(message);
		this.statusCode = statusCode;
		this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
		this.isOperational = true;

		Error.captureStackTrace(this, this.constructor);
	}
}

export function errorHandler(
	err: IError,
	_req: Request,
	res: Response,
	_next: NextFunction,
): void {
	err.statusCode = err.statusCode || 500;
	err.status = err.status || "error";

	logger.error(err);

	res.status(err.statusCode).json({
		status: err.status,
		message: err.message,
		...(process.env.NODE_ENV === "development" && { stack: err.stack }),
	});
}

export function notFoundHandler(
	req: Request,
	res: Response,
	next: NextFunction,
): void {
	const error = new Error(`Not Found - ${req.originalUrl}`) as IError;
	error.statusCode = 404;
	next(error);
}

type AsyncFunction = (
	req: Request,
	res: Response,
	next: NextFunction,
) => Promise<void> | void;

export function asyncHandler(fn: AsyncFunction) {
	return (req: Request, res: Response, next: NextFunction): void => {
		Promise.resolve(fn(req, res, next)).catch(next);
	};
}
