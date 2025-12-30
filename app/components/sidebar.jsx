import React from "react";
import Link from "next/link";

const sidebar = () => {
  const routes = [
    {
      label: "Dashboard",
      link: "/dashboard",
    },
    {
      label: "Users",
      link: "/users",
    },
    {
      label: "Projects",
      link: "/projects",
    },
    {
      label: "Tasks",
      link: "/tasks",
    },
    {
      label: "Reports",
      link: "/reports",
    },
    {
      label: "Analytics",
      link: "/analytics",
    },
    {
      label: "Notifications",
      link: "/notifications",
    },
    {
      label: "Settings",
      link: "/settings",
    },
    {
      label: "Profile",
      link: "/profile",
    },
  ];

  return (
    <div className="w-[95%] mx-auto h-full">
      <div className="h-full flex justify-around flex-col w-full text-center">
        <div className="border border-solid border-black h-[10%] rounded-md text-center flex items-center justify-center shadow-xl text-3xl font-bold bg-white p-6">
          <p>ADMIN DASHBOARD</p>
        </div>

        <div className="border border-solid border-black h-[85%] rounded-md">
          <ul className="w-[95%] mx-auto flex flex-col gap-4 h-full overflow-y-auto">
            {routes.map((item) => {
              return (
                <Link
                  key={item.link + item.label}
                  className="w-full"
                  href={item.link}
                >
                  <li className="text-2xl font-semibold bg-amber-300 p-5 hover:bg-amber-200 rounded-md border border-black">
                    {item.label}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
