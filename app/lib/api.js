// lib/api.js
import { auth } from "@/auth";

// For server-side calls
export async function apiCallServer(endpoint, options = {}) {
  const session = await auth();

  if (!session?.backendToken) {
    throw new Error("Not authenticated");
  }

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${session.backendToken}`,
    ...options.headers,
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    throw new Error(`API call failed: ${res.statusText}`);
  }

  return res.json();
}

// For client-side calls
export async function apiCallClient(endpoint, backendToken, options = {}) {
  if (!backendToken) {
    throw new Error("Not authenticated");
  }

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${backendToken}`,
    ...options.headers,
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    throw new Error(`API call failed: ${res.statusText}`);
  }

  return res.json();
}
