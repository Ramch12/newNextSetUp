// app/components/Navbar.js
"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            MyApp
          </Link>

          <div className="flex items-center gap-4">
            {status === "loading" ? (
              <span className="text-gray-500">Loading...</span>
            ) : session ? (
              <>
                <span className="text-gray-700">
                  Welcome, {session.user.name}!
                </span>
                <Link
                  href="/dashboard"
                  className="px-4 py-2 text-blue-600 hover:text-blue-700"
                >
                  Dashboard
                </Link>
                <Link
                  href="/profile"
                  className="px-4 py-2 text-blue-600 hover:text-blue-700"
                >
                  Profile
                </Link>
                {session.user.role === "admin" && (
                  <Link
                    href="/admin"
                    className="px-4 py-2 text-purple-600 hover:text-purple-700"
                  >
                    Admin
                  </Link>
                )}
                <LogoutButton />
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 text-blue-600 hover:text-blue-700"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
