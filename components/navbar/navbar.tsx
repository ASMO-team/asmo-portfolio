// components/navbar/navbar.tsx
"use client";
import Icon from "@/icons/icon";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  onMenuClick?: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="flex items-center justify-between bg-white px-4 sm:px-[30px] py-2">
      {/* Логотип с адаптивными размерами */}
      <div className="relative w-32 h-14 sm:w-40 sm:h-[66px] md:w-[212px] md:h-[88px]">
        <Image
          src="/asmo.svg"
          alt="asmo Logo"
          fill
          className="hover:opacity-80 transition-opacity duration-300 object-contain"
        />
      </div>
      
      {/* Десктопная навигация - скрыта на мобильных */}
      <div className="hidden md:flex items-center gap-8 lg:gap-10">
        <nav className="flex items-center gap-6 lg:gap-[30px]">
          <Link 
            href={"/"} 
            className="text-[#000000E6] hover:text-[#D24A43] transition-colors duration-300 text-sm lg:text-base"
          >
            Главная
          </Link>
          <Link 
            href={"/2"}
            className="text-[#000000E6] hover:text-[#D24A43] transition-colors duration-300 text-sm lg:text-base"
          >
            О нас
          </Link>
        </nav>
        
        <div className="flex items-center gap-4 lg:gap-[30px]">
          <a href="dsds" className="text-black hover:scale-110 transition-transform duration-300">
            <Icon name="mail" width={24} height={18} className="sm:w-[30px] sm:h-[23px]" />
          </a>
          <a href="dsds" className="text-black hover:scale-110 transition-transform duration-300">
            <Icon name="whatsapp" width={20} height={20} className="sm:w-[25px] sm:h-[25px]" />
          </a>
          <a href="dsds" className="text-black hover:scale-110 transition-transform duration-300">
            <Icon name="tg" width={20} height={20} className="sm:w-[25px] sm:h-[25px]" />
          </a>
          
          <div className="flex items-center justify-center rounded-[86px] px-2 py-2 sm:px-2.5 sm:py-[11.5px] border border-solid border-black hover:bg-black transition-all duration-300 group">
            <a href="tel:+79161234567" className="text-black group-hover:text-[#D24A43] transition-colors duration-300 text-xs sm:text-sm">
              +7 (916) 123-45-67
            </a>
          </div>
        </div>
      </div>

      {/* Кнопка меню для мобильных - скрыта на десктопе */}
      <button 
        onClick={onMenuClick}
        className="md:hidden p-2 hover:bg-gray-100 rounded transition-colors duration-200 text-black"
        aria-label="Открыть меню"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
}