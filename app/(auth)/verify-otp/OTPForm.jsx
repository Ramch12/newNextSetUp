// app/verify-otp/OTPForm.js
"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function OTPForm({ email, password }) {
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef([]);

  // Countdown timer for resend OTP
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index, value) => {
    // Only allow numbers
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);

    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = [...otp];
    pastedData.split("").forEach((char, index) => {
      if (index < 6) {
        newOtp[index] = char;
      }
    });
    setOtp(newOtp);

    // Focus last filled input or next empty
    const lastIndex = Math.min(pastedData.length, 5);
    inputRefs.current[lastIndex]?.focus();
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const otpString = otp.join("");

    if (otpString.length !== 6) {
      setError("Please enter complete OTP");
      setLoading(false);
      return;
    }

    try {
      // Use NextAuth signIn with OTP provider
      const result = await signIn("credentials", {
        email,
        password,
        otp: otpString,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid OTP. Please try again.");
        setOtp(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
        setLoading(false);
      } else {
        // OTP verified successfully, redirect to dashboard
        router.push("/dashboard");
        router.refresh();
      }
    } catch (error) {
      setError("Something went wrong");
      setLoading(false);
    }
  }

  async function handleResendOTP() {
    setResending(true);
    setError("");

    try {
      // Call your backend to resend OTP
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/resend-otp`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        setTimer(60); // Reset timer
        setOtp(["", "", "", "", "", ""]); // Clear OTP inputs
        inputRefs.current[0]?.focus();
        // You could show a success message here
      } else {
        setError(data.message || "Failed to resend OTP");
      }
    } catch (error) {
      setError("Failed to resend OTP");
    } finally {
      setResending(false);
    }
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-2">Verify OTP</h1>
        <p className="text-gray-600 text-sm">Enter the 6-digit code sent to</p>
        <p className="text-blue-600 font-medium">{email}</p>
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="flex justify-center gap-2 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              disabled={loading}
              autoFocus={index === 0}
            />
          ))}
        </div>

        <button
          type="submit"
          disabled={loading || otp.some((digit) => !digit)}
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition disabled:bg-gray-400 font-medium"
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
      </form>

      <div className="mt-6 text-center">
        {timer > 0 ? (
          <p className="text-gray-600 text-sm">
            Resend OTP in{" "}
            <span className="font-bold text-blue-600">{timer}s</span>
          </p>
        ) : (
          <button
            onClick={handleResendOTP}
            disabled={resending}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm disabled:text-gray-400"
          >
            {resending ? "Sending..." : "Resend OTP"}
          </button>
        )}
      </div>

      <div className="mt-4 text-center">
        <button
          onClick={() => router.push("/login")}
          className="text-gray-600 hover:text-gray-700 text-sm"
        >
          ← Back to Login
        </button>
      </div>
    </div>
  );
}
