"use client";
import { signIn } from "next-auth/react";
export default function SocialLoginBtn() {
  const handleGoogleSignIn = () => {
    signIn("google", {
      callback: "/",
    });
  };
  return (
    <div className="w-full mt-2 rounded-2xl">
      <button
        type=""
        className="w-full cursor-pointer bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-400"
        onClick={handleGoogleSignIn}
      >
        Continue with google
      </button>
    </div>
  );
}
