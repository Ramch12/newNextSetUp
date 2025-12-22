// app/profile/edit/page.js
"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function EditProfilePage() {
  const { data: session } = useSession();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session?.backendToken) {
      fetchProfile();
    }
  }, [session]);

  async function fetchProfile() {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/profile`,
        {
          headers: {
            Authorization: `Bearer ${session.backendToken}`,
          },
        }
      );

      const data = await res.json();
      setProfile(data);
    } catch (error) {
      console.error("Failed to fetch profile:", error);
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdate(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/profile`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.backendToken}`,
          },
          body: JSON.stringify({
            name: formData.get("name"),
            bio: formData.get("bio"),
          }),
        }
      );

      if (res.ok) {
        alert("Profile updated successfully!");
        fetchProfile();
      }
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  }

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Edit Profile</h1>

      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            defaultValue={profile?.name}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Bio</label>
          <textarea
            name="bio"
            defaultValue={profile?.bio}
            rows={4}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}
