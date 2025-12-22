// app/login/LoginForm.js
"use client";

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Get callback URL or default to dashboard
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false, // Don't auto redirect
      });

      if (result?.error) {
        setError("Invalid email or password");
        setLoading(false);
      } else {
        // Login successful
        router.push(callbackUrl);
        router.refresh();
      }
    } catch (error) {
      setError("Something went wrong");
      setLoading(false);
    }
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            name="password"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-400"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="text-center mt-4 text-sm">
        Don't have an account?
        <a href="/register" className="text-blue-500 ml-1">
          Register
        </a>
      </p>
    </div>
  );
}
