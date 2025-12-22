// app/dashboard/page.js
import { auth } from "@/app/auth";
import { redirect } from "next/navigation";
import LogoutButton from "@/app/components/LogoutButton";

export default async function DashboardPage() {
  console.log("this is a dashboard Route");
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">User Information</h2>
          <div className="space-y-2">
            <p>
              <strong>Name:</strong> {session.user.name}
            </p>
            <p>
              <strong>Email:</strong> {session.user.email}
            </p>
            <p>
              <strong>Role:</strong> {session.user.role}
            </p>
            <p>
              <strong>User ID:</strong> {session.user.id}
            </p>
          </div>

          <div className="mt-6">
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
}
