"use client"
import { TopNavbar } from "../(main)/_components/TopNavbar";
import {BreadCrumbComponent} from "./_components/breadcrumb"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopNavbar breadcrumb={<BreadCrumbComponent/>}>
        {children}
      </TopNavbar>
    </>
  );
}
