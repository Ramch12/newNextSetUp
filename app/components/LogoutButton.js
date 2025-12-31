// app/components/LogoutButton.js
"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer"
    >
      Logout
    </button>
  );
}
