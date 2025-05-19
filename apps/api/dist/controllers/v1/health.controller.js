import { config } from "@/config";
export const getHealth = async (_req, res) => {
    const healthResponse = {
        status: "ok",
        timestamp: new Date().toISOString(),
        version: "1.0.0",
        environment: config.env,
    };
    res.status(200).json(healthResponse);
};
