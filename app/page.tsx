"use client";
import { useState } from "react";
import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import Sidebar from "@/components/layout/Sidebar/Sidebar";
import Fifth from "@/components/sections/Fifth";
import First from "@/components/sections/First";
import Forth from "@/components/sections/Forth";
import Second from "@/components/sections/Second";
import Third from "@/components/sections/Third";
import { useTheme } from "@/hooks/useTheme";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-800">
        <div>Загрузка...</div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'dark bg-gray-900' : 'bg-white'
    }`}>
      {/* Кнопка переключения темы */}
      <button
        onClick={toggleTheme}
        className="fixed top-24 right-6 z-40 p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-all duration-300 group"
        aria-label={theme === 'light' ? 'Включить темную тему' : 'Включить светлую тему'}
      >
        <div className="relative w-5 h-5">
          {/* Солнце (светлая тема) */}
          <svg 
            className={`w-5 h-5 text-yellow-500 transition-all duration-300 absolute inset-0 ${
              theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'
            }`} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          
          {/* Луна (темная тема) */}
          <svg 
            className={`w-5 h-5 text-blue-400 transition-all duration-300 absolute inset-0 ${
              theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
            }`} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </div>
        
        {/* Индикатор текущей темы */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
      </button>

      <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      {/* УБРАТЬ bg-white и dark:bg-gray-800 отсюда */}
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