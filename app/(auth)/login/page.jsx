import React from "react";
import { auth } from "@/app/auth";
import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";

const LoginPage = async () => {
  const session = await auth();
  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
