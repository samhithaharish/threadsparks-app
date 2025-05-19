import { Router } from "express";
import { asyncHandler } from "@/middleware/error.middleware";
import { getHealth } from "@/controllers/v1/health.controller";
const router = Router();
// Health check endpoint
router.get("/health", asyncHandler(getHealth));
// Add other v1 routes here
// router.use('/users', userRoutes);
export default router;
