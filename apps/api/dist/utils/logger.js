import winston from "winston";
import { config } from "@/config";
const { combine, timestamp, printf, colorize, align } = winston.format;
const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`;
});
export const logger = winston.createLogger({
    level: config.env === "development" ? "debug" : "info",
    format: combine(colorize({ all: true }), timestamp({
        format: "YYYY-MM-DD hh:mm:ss.SSS A",
    }), winston.format.errors({ stack: true }), align(), logFormat),
    transports: [new winston.transports.Console()],
});
export const stream = {
    write: (message) => {
        logger.info(message.trim());
    },
};
