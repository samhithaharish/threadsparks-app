import { Router } from "express";
import type { ApiResponse, User } from "@app/shared";

const router = Router();

// Example route that uses shared types
router.get("/user", (req, res) => {
	// This is just an example - in a real app, you'd fetch this from a database
	const user: User = {
		id: "123",
		email: "user@example.com",
		name: "John Doe",
	};

	const response: ApiResponse<User> = {
		data: user,
		success: true,
		message: "User retrieved successfully",
	};

	res.json(response);
});

export default router;
