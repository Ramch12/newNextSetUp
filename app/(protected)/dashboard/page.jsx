// app/dashboard/page.js
import { auth } from "@/app/auth";
import { redirect } from "next/navigation";
import LogoutButton from "@/app/components/LogoutButton";
import Image from "next/image";
// import { useSession } from "next-auth/react";

export default async function DashboardPage() {
  console.log("this is a dashboard Route");
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const { user } = session;

  return (
    <div className="p-8">
      <div className="max-w-6xl">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

        <div className="bg-white p-6 rounded-lg shadow-lg inset-shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Dashboard Info</h2>
        </div>
      </div>
    </div>
  );
}
