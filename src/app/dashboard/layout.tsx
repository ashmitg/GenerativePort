"use client"
import type { Metadata } from "next";
import { useAuth } from "../hooks/auth";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { SideNavbar } from "./(main)/_components/SideNavbar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter()
  const [loadingState, setLoadingState] = useState<boolean>(true)
  const { loading, email } = useAuth()

  useEffect(() => {
    if (loading) {
      setLoadingState(true)
    } else if (!email) {
      setLoadingState(true)

      router.push('/signin')
    } else {
      setLoadingState(false)
    }
  }, [loading, email, router])

  if (loadingState) {
    return null;
  }

  return (
    <>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <SideNavbar />
          

          <main className="flex flex-col gap-4 p-4 lg:gap-6">
            {children}
          </main>

      </div>
    </>
  );
}
