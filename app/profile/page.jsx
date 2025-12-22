// app/profile/page.js
import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function getUserProfile(token) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/user/profile`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store", // Don't cache for fresh data
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch profile");
  }

  return res.json();
}

export default async function ProfilePage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  // Use the backend token from session
  const profile = await getUserProfile(session.backendToken);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p>
          <strong>Name:</strong> {profile.name}
        </p>
        <p>
          <strong>Email:</strong> {profile.email}
        </p>
        <p>
          <strong>Bio:</strong> {profile.bio}
        </p>
      </div>
    </div>
  );
}
