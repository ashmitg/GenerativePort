
"use client"
import { HomePage } from "@/components/Default"

export default function Page({ params }: { params: { id: string } }) {
    console.log(params, "slug outputted")
    return <HomePage id={params.id}/>
  }