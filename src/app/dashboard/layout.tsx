"use client"
import type { Metadata } from "next";
import {Navbar} from "@/components/dashboard/navbar/navbar"
import {useAuth} from '../hooks/auth'
import {useRouter} from 'next/navigation'
import {useEffect, useState} from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter()
  const [loadingState, setLoadingState] = useState<boolean>(true)
  const {loading, email} = useAuth()

  useEffect(()=>{
    if (loading) {
      setLoadingState(true)
    }else if(!email){
      setLoadingState(true)

      router.push('/signin')
    }else{
      setLoadingState(false)
    }
  }, [loading, email, router])
  
  if(loadingState){
    return null;
  }

  return (
    <>
        
        <div className="flex h-screen overflow-auto">
            <Navbar/>
        <main className="w-full pt-16">{children}</main>
      </div>
    </>
  );
}
