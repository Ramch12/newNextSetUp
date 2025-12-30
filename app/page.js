"use client";
import { useRouter } from "next/navigation";
import { useSession } from 'next-auth/react'

export default function Home({ children }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (!session) {
    return router.push("/login");
  }
  return router.push("/dashboard");
}
