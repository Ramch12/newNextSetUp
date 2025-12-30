"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MdDashboardCustomize, MdOutlineBugReport } from "react-icons/md";
import { FaUsers, FaTasks } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { SiGoogleanalytics } from "react-icons/si";
import { IoIosNotifications } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { ImProfile } from "react-icons/im";

const Sidebar = () => {
  const pathName = usePathname();

  let routes = [
    { label: "Profile", link: "/profile", icon: <ImProfile size={25} /> },
    { label: "Dashboard", link: "/", icon: <MdDashboardCustomize size={25} /> },
    { label: "Users", link: "/users", icon: <FaUsers size={25} /> },
    {
      label: "Projects",
      link: "/projects",
      icon: <GoProjectSymlink size={25} />,
    },
    { label: "Tasks", link: "/tasks", icon: <FaTasks size={25} /> },
    {
      label: "Reports",
      link: "/reports",
      icon: <MdOutlineBugReport size={25} />,
    },
    {
      label: "Analytics",
      link: "/analytics",
      icon: <SiGoogleanalytics size={25} />,
    },
    {
      label: "Notifications",
      link: "/notifications",
      icon: <IoIosNotifications size={25} />,
    },
    { label: "Settings", link: "/settings", icon: <CiSettings size={25} /> },
  ];

  routes = routes.map((route) => ({
    ...route,
    isSelected:
      route.link === "/"
        ? pathName === "/dashboard"
        : pathName.startsWith(`/dashboard${route.link}`),
  }));

  return (
    <div className="w-[95%] mx-auto h-full">
      <div className="h-full flex flex-col justify-start pt-2 ">
        {/* Header */}
        <div className="h-[10%] rounded-md shadow-xl bg-white p-4 flex items-center border">
          <Image
            src="/business-user-shield_78370-7029.avif"
            width={40}
            height={40}
            alt="Admin"
          />
          <p className="ml-4 font-bold">Admin Dashboard</p>
        </div>

        {/* Menu */}
        <div className="h-[80%] rounded-md mt-2">
          <ul className="flex flex-col gap-1">
            {routes.map((item) => (
              <li
                key={item.label}
                className={`${
                  item.isSelected ? "bg-[#2563EB]" : "bg-[#88a9f0]"
                } hover:bg-[#2563EB] rounded-md border`}
              >
                <Link
                  href={
                    item.link === "/" ? "/dashboard" : `/dashboard${item.link}`
                  }
                  className="flex items-center gap-4 p-2"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
