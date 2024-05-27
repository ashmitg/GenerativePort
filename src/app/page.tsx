"use client";
import { HomePage } from "@/components/Default";

export default function Home() {
  return (
    <div suppressHydrationWarning={true}>
      <HomePage id={null} />
    </div>
  );
}
