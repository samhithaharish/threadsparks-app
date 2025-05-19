import type { Request, Response } from "express";
import { config } from "@/config";

interface IHealthResponse {
	status: string;
	timestamp: string;
	version: string;
	environment: string;
}

export const getHealth = async (
	_req: Request,
	res: Response<IHealthResponse>,
): Promise<void> => {
	const healthResponse: IHealthResponse = {
		status: "ok",
		timestamp: new Date().toISOString(),
		version: "1.0.0",
		environment: config.env,
	};

	res.status(200).json(healthResponse);
};
