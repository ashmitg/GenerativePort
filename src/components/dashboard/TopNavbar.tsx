"use client"

import { auth } from "@/firebase";

import { Button } from '@/components/ui/button'
import { Dialog, DialogClose } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { LogOut, LineChart, HomeIcon, Settings } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

export function TopNavbar({ children, breadcrumb }: { children: ReactNode, breadcrumb: ReactNode }) {
  return (
    <div className="flex flex-col w-full">
      <header className="flex h-14 lg:h-[75px] items-center  gap-4 border-b px-4 lg:items-end lg:pb-3">
        <Dialog>
          <SheetTrigger className="lg:hidden p-2 transition">
            <HamburgerMenuIcon />
            <Link href="/dashboard">
              <span className="sr-only">Home</span>
            </Link>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <Link href="#">
                <SheetTitle>Portfolio</SheetTitle>
              </Link>
            </SheetHeader>
            <div className="flex flex-col space-y-3 mt-[1rem]">
              <DialogClose asChild>
                <Link href="/dashboard">
                  <Button variant="outline" className="w-full">
                    <HomeIcon className="mr-2 h-4 w-4" />
                    Home
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/dashboard/analytics">
                  <Button variant="outline" className="w-full">
                    <LineChart className="mr-2 h-4 w-4" />
                    Analytics
                  </Button>
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/dashboard/settings">
                  <Button variant="outline" className="w-full">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </Link>
              </DialogClose>
              
              <Separator className="my-3" />
              <DialogClose asChild>
                <Link href="#">
                  <Button variant="outline" className="w-full" onClick={() => auth.signOut()}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </Link>
              </DialogClose>
            </div>
          </SheetContent>
        </Dialog>
        {breadcrumb}
      </header>

      {children}
    </div>
  )
}