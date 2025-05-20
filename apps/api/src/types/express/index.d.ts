import type { Request, Response, NextFunction } from "express";

declare global {
	namespace Express {
		interface Request {
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			user?: any; // TODO: Replace 'any' with your user type
		}
	}
}

export type AsyncHandler = (
	req: Request,
	res: Response,
	next: NextFunction,
) => Promise<void>;

export interface IError extends Error {
	statusCode?: number;
	status?: string;
	isOperational?: boolean;
	code?: number;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	errors?: any;
}
