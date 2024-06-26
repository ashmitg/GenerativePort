"use client";
import Link from "next/link";
import { useState } from "react";
import { auth } from "@/firebase";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import {  LogOut, LineChart, HomeIcon, Settings } from 'lucide-react'
import { Separator } from "@radix-ui/react-dropdown-menu";

export function SideNavbar() {

  const pathname = usePathname();
  const segments = pathname.split("/");
  const lastSegment = segments[segments.length - 1];

  const [activeItem, setActiveItem] = useState(lastSegment);

  const handleSetActiveItem = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div className="lg:block hidden border-r h-full">
      <div className="flex h-full max-h-screen flex-col gap-2 ">
        <div className="flex h-[75px] items-center justify-between border-b px-3 w-full">
          <Link className="flex items-center gap-4 font-semibold" href="#">
            <span className="text-3xl">Home</span>
          </Link>
        </div>

        <div className="flex-1 overflow-hidden py-4">
          <nav className="grid items-start px-4 text-xl font-medium gap-4">
            <Link
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50", { "flex border items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50":  activeItem === "dashboard"
              })}
              href="/dashboard"
              onClick={() => handleSetActiveItem("dashboard")}
            >
              <HomeIcon className="h-6 w-6" />
              Dashboard
            </Link>
            <Link
              className={clsx("flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50", { "flex border items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50": activeItem === "analytics" })}
              href="/dashboard/analytics"
              onClick={() => handleSetActiveItem("analytics")}
            >
              <LineChart className="h-8 w-8" />
              Analytics
            </Link>
            <Link
              className={clsx(" flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50", {
                "border flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50": activeItem === "settings"
              })}
              href="/dashboard/settings"
              onClick={() => handleSetActiveItem("settings")}
            >
              <Settings className="h-6 w-6" />
              Settings
            </Link>


            <Link
              className={clsx("bottom-0 flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50", {
                "border flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50": activeItem === "logout"
              })}
              href="#"
              onClick={() => auth.signOut()}
            >
              <LogOut className="h-6 w-6" />
              Log Out
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

