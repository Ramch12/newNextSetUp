// app/verify-otp/page.js
import { auth } from "@/app/auth";
import { redirect } from "next/navigation";
// import { useSearchParams } from "next/navigation";
import OTPForm from "./OTPForm";

export default async function VerifyOTPPage({ searchParams }) {
  const session = await auth();
  // const params = useSearchParams();
  const { email, password } = await searchParams;
  console.log("{ email, password }", { email, password });

  if (session) {
    redirect("/dashboard");
  }

  if (!email) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <OTPForm
        email={decodeURIComponent(email)}
        password={decodeURIComponent(password)}
      />
    </div>
  );
}
