import { Router } from "express";
const router = Router();
// Example route that uses shared types
router.get("/user", (req, res) => {
    // This is just an example - in a real app, you'd fetch this from a database
    const user = {
        id: "123",
        email: "user@example.com",
        name: "John Doe",
    };
    const response = {
        data: user,
        success: true,
        message: "User retrieved successfully",
    };
    res.json(response);
});
export default router;
