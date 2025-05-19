import { logger } from "@/utils/logger";
export class ApiError extends Error {
    statusCode;
    status;
    isOperational;
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor);
    }
}
export function errorHandler(err, _req, res, _next) {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    logger.error(err);
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    });
}
export function notFoundHandler(req, res, next) {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    error.statusCode = 404;
    next(error);
}
export function asyncHandler(fn) {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
}
