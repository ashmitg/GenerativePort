"use client"
import { TopNavbar } from "@/components/dashboard/TopNavbar";
import {BreadCrumbComponent} from "./_components/DashboardBreadcrumb"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopNavbar breadcrumb={<BreadCrumbComponent/>}>
        {children}
      </TopNavbar>
    </>
  );
}
