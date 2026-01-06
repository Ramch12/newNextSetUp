"use client";
import { redirect } from "next/navigation";
import LogoutButton from "@/app/components/LogoutButton";
import Image from "next/image";
import { useSession } from "next-auth/react";
import {useDispatch} from 'react-redux';
import {setDarkTheme, setWhiteTheme} from '@/app/store/slices/ui.slice'


export default function Profile() {
  console.log("this is a dashboard Route");
  const session = useSession();
  const dispatch = useDispatch();


  if (!session) {
    redirect("/login");
  }

  const { data } = session;

  const handleChangeTheme = (mode) => {
    if (mode === "dark") {
      dispatch(
        setDarkTheme({
          theme: "dark",
          layout: "compact",
        })
      );
    } else {
      dispatch(
        setWhiteTheme({
          theme: "light",
          layout: "comprehensive",
        })
      );
    }
  };

 
  return (
    <div className="p-8">
      <div className="max-full">
        {/* div for profile menu */}
        <h1 className="text-3xl font-bold mb-4">User Profile</h1>

        <div className="bg-white p-6 rounded-lg shadow-lg inset-shadow-sm">
          <h2 className="text-xl font-semibold mb-4">User Profile</h2>
          <div className="w-full flex justify-between">
            <div className="space-y-2">
              <p>
                <strong>Name:</strong> {data?.user?.name}
              </p>
              <p>
                <strong>Email:</strong> {data?.user?.email}
              </p>
              <p>
                <strong>Role:</strong> {data?.user?.role}
              </p>
              <p>
                <strong>User ID:</strong> {data?.user.id}
              </p>
            </div>
            <div className="mr-10 w-40 h-40 border rounded-sm">
              <Image
                src={data?.user?.image || `${process.env.NEXT_PUBLIC_SERVER_URL}/profile_pic.png`}
                width={160}
                height={100}
                alt="Profile-Picture"
                unoptimized
              />
            </div>
          </div>
          <div className="mt-6 flex">
            <LogoutButton />
          </div>
        </div>
        <div className="w-full flex justify-around mt-10">
          <button onClick={()=>{handleChangeTheme("dark")}} className="p-2 bg-green-300 border cursor-pointer rounded-md">Change Theme</button>
          <button onClick={()=>{handleChangeTheme("light")}} className="p-2 bg-green-300 border cursor-pointer rounded-md">Change Theme</button>
        </div>
      </div>
    </div>
  );
}
