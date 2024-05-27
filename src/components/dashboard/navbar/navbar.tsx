"use client";
import Link from "next/link";
import { useState } from "react";
import { auth } from "@/firebase";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const lastSegment = segments[segments.length - 1];

  const [activeItem, setActiveItem] = useState(lastSegment);

  const handleSetActiveItem = (item: string) => {
    setActiveItem(item);
  };

  return (
    <div
      className="hidden border-r bg-gray-100/40 lg:block mt-4"
      style={{ padding: "20px", fontSize: "28px" }}
    >
      <div className="flex h-full max-h-screen flex-col gap-4">
        <div className="flex h-[100px] items-center border-b px-6">
          <Link className="flex items-center gap-4 font-semibold" href="#">
            <LinkIcon className="h-10 w-10" />
            <span className="">Portfolio Generator</span>
          </Link>
        </div>
        <div className="flex-1 overflow-hidden py-4">
          <nav className="grid items-start px-4 text-xl font-medium gap-4">
            <Link
              className={`flex items-center gap-4 rounded-lg px-4 py-3 ${activeItem === "dashboard"
                ? "bg-gray-100 text-gray-900"
                : "text-gray-500"
                } transition-all hover:text-gray-900 `}
              href="/dashboard"
              onClick={() => handleSetActiveItem("dashboard")}
            >
              <HomeIcon className="h-8 w-8" />
              Dashboard
            </Link>
            <Link
              className={`flex items-center gap-4 rounded-lg px-4 py-3 ${activeItem === "analytics"
                ? "bg-gray-100 text-gray-900"
                : "text-gray-500"
                } transition-all hover:text-gray-900 `}
              href="/dashboard/analytics"
              onClick={() => handleSetActiveItem("analytics")}
            >
              <UsersIcon className="h-8 w-8" />
              Analytics
            </Link>
            <Link
              className={`flex items-center gap-4 rounded-lg px-4 py-3 ${activeItem === "settings"
                ? "bg-gray-100 text-gray-900"
                : "text-gray-500"
                } transition-all hover:text-gray-900`}
              href="/dashboard/settings"
              onClick={() => handleSetActiveItem("settings")}
            >
              <SettingsIcon className="h-8 w-8" />
              Settings
            </Link>

            <Link
              className={`flex items-center gap-4 rounded-lg px-4 py-3 margin-top: auto  ${activeItem === "logout"
                ? "bg-gray-100 text-gray-900"
                : "text-gray-500"
                } transition-all hover:text-gray-900`}
              href="#"
              onClick={() => auth.signOut()}
            >
              <LogOutIcon className="h-8 w-8" />
              Log Out
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

function HomeIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LinkIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function LogOutIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}

function SettingsIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UsersIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
