
"use client"
import { HomePage } from "@/components/Default"

export default function Page({ params }: { params: { id: string } }) {

  return <HomePage id={params.id}/>
  }