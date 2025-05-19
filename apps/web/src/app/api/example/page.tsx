"use client";

import { useEffect, useState } from "react";
import type { ApiResponse, User } from "@app/shared";

export default function ExamplePage() {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				// In a real app, this would be your API endpoint
				const response = await fetch("http://localhost:3000/api/user");
				const data: ApiResponse<User> = await response.json();

				if (data.success && data.data) {
					setUser(data.data);
				} else {
					setError(data.message || "Failed to fetch user");
				}
			} catch (err) {
				setError("An error occurred while fetching user data");
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		fetchUser();
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;

	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">User Profile</h1>
			{user && (
				<div className="bg-white p-4 rounded shadow">
					<p>
						<strong>ID:</strong> {user.id}
					</p>
					<p>
						<strong>Name:</strong> {user.name}
					</p>
					<p>
						<strong>Email:</strong> {user.email}
					</p>
				</div>
			)}
		</div>
	);
}
