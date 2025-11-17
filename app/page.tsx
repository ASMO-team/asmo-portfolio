"use client";
import { useState } from "react";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import Fifth from "@/components/sections/Fifth";
import First from "@/components/sections/First";
import Forth from "@/components/sections/Forth";
import Second from "@/components/sections/Second";
import Third from "@/components/sections/Third";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen ">
      <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      <div className="flex flex-col gap-16 pb-[30px]">
        <main className="flex flex-col gap-[58px]">
          <First/>
          <Second/>
          <Third/>
          <Forth/>
          <Fifth/>
        </main>
        <Footer/>
      </div>
    </div>
  );
}