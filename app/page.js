"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Home({ children }) {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return;
    else if (!session) {
      router.push("/login");
    } else {
      router.push("/dashboard/profile");
    }
  }, [session, status]);
  return null;
}
