import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Load environment variables
const envPath = path.join(__dirname, "../../.env");
dotenv.config({ path: envPath });
const config = {
    env: process.env.NODE_ENV || "development",
    port: process.env.PORT || 3000,
    // Add other configuration here
};
export { config };
