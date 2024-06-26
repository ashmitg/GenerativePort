"use clien"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Slash } from "lucide-react"

export function BreadCrumbComponent() {
  return (
    <Breadcrumb className="hidden lg:block">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href="/dashboard/settings">Settings</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )

}