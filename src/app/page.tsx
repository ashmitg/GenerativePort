"use client";
import { HomePage } from "@/components/main";

export default function Home() {
  return (
    <div suppressHydrationWarning={true}>
      <HomePage id={null} />
    </div>
  );
}
