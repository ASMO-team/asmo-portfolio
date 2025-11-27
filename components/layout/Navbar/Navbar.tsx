"use client";
import Icon from "@/icons/icon";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import classNames from 'classnames';

interface NavbarProps {
  onMenuClick?: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const pathname = usePathname();
  const { theme, toggleTheme, mounted } = useTheme();

  // Чтобы избежать hydration mismatch, показываем fallback до монтирования
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 max-w-7xl mx-auto">
          {/* Логотип скелетон */}
          <div className="relative w-32 h-12 sm:w-36 sm:h-14 md:w-44 md:h-16 shrink-0">
            <div className="w-full h-full bg-gray-200 animate-pulse rounded"></div>
          </div>
          
          {/* Десктопная навигация скелетон */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <div className="flex items-center gap-8 lg:gap-10">
              <div className="w-16 h-6 bg-gray-200 animate-pulse rounded"></div>
              <div className="w-12 h-6 bg-gray-200 animate-pulse rounded"></div>
            </div>
          </div>

          {/* Кнопка меню скелетон */}
          <div className="md:hidden p-2.5">
            <div className="w-6 h-6 bg-gray-200 animate-pulse rounded"></div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className={classNames(
      "sticky top-0 z-50 w-full backdrop-blur-md border-b shadow-sm transition-colors duration-300",
      theme === 'light' 
        ? "bg-white/95 border-gray-100 shadow-sm" 
        : "bg-gray-900/95 border-gray-800 shadow-gray-900/50"
    )}>
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 max-w-7xl mx-auto">
        {/* Логотип - меняется в зависимости от темы */}
        <div className="relative w-32 h-12 sm:w-36 sm:h-14 md:w-44 md:h-16 shrink-0">
          <Link href="/" className="block">
            <Image
              src={'/asmo.svg'}
              alt="asmo Logo"
              fill
              className="hover:scale-105 transition-transform duration-300 object-contain"
              priority
            />
          </Link>
        </div>
        
        {/* Десктопная навигация */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          <nav className="flex items-center gap-8 lg:gap-10">
            <Link 
              href="/" 
              className={classNames(
                "relative px-2 py-1 text-sm lg:text-base font-medium transition-all duration-300 group",
                pathname === "/" 
                  ? "text-[#D24A43] font-semibold" 
                  : classNames(
                      theme === 'light' ? "text-gray-700 hover:text-[#D24A43]" : "text-gray-200 hover:text-[#D24A43]"
                    )
              )}
            >
              Главная
              <span className={classNames(
                "absolute bottom-0 left-0 w-0 h-0.5 bg-[#D24A43] transition-all duration-300 group-hover:w-full",
                pathname === "/" ? "w-full" : ""
              )}></span>
            </Link>
            <Link 
              href="/about"
              className={classNames(
                "relative px-2 py-1 text-sm lg:text-base font-medium transition-all duration-300 group",
                pathname === "/about" 
                  ? "text-[#D24A43] font-semibold" 
                  : classNames(
                      theme === 'light' ? "text-gray-700 hover:text-[#D24A43]" : "text-gray-200 hover:text-[#D24A43]"
                    )
              )}
            >
              О нас
              <span className={classNames(
                "absolute bottom-0 left-0 w-0 h-0.5 bg-[#D24A43] transition-all duration-300 group-hover:w-full",
                pathname === "/about" ? "w-full" : ""
              )}></span>
            </Link>
          </nav>
          
          {/* Социальные иконки и телефон */}
          <div className={classNames(
            "flex items-center gap-5 lg:gap-6 pl-2 border-l",
            theme === 'light' ? "border-gray-200" : "border-gray-700"
          )}>
            <div className="flex items-center gap-4 lg:gap-5">
              <a 
                href="mailto:info@asmo.com" 
                className={classNames(
                  "hover:text-[#D24A43] hover:scale-110 transition-all duration-300 p-1.5 rounded-lg",
                  theme === 'light' 
                    ? "text-gray-600 hover:bg-gray-50" 
                    : "text-gray-300 hover:bg-gray-800"
                )}
                aria-label="Написать на почту"
              >
                <Icon name="mail" width={30} height={23} />
              </a>
              <a 
                href="https://wa.me/79161234567" 
                className={classNames(
                  "hover:text-[#25D366] hover:scale-110 transition-all duration-300 p-1.5 rounded-lg",
                  theme === 'light' 
                    ? "text-gray-600 hover:bg-gray-50" 
                    : "text-gray-300 hover:bg-gray-800"
                )}
                aria-label="Написать в WhatsApp"
              >
                <Icon name="whatsapp" width={25} height={25} />
              </a>
              <a 
                href="https://t.me/asmo" 
                className={classNames(
                  "hover:text-[#0088cc] hover:scale-110 transition-all duration-300 p-1.5 rounded-lg",
                  theme === 'light' 
                    ? "text-gray-600 hover:bg-gray-50" 
                    : "text-gray-300 hover:bg-gray-800"
                )}
                aria-label="Написать в Telegram"
              >
                <Icon name="tg" width={25} height={25} />
              </a>
            </div>
            
            <div className="flex items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D24A43] to-[#b53a34] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-gradient-to-r from-[#D24A43] to-[#b53a34] rounded-2xl px-4 py-2.5 hover:from-[#b53a34] hover:to-[#9a2d28] transition-all duration-300 shadow-md hover:shadow-lg">
                  <a 
                    href="tel:+79161234567" 
                    className="text-white text-sm font-medium whitespace-nowrap flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +7 (916) 123-45-67
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Мобильная навигация */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Кнопка переключения темы для мобильных */}
          <button
            onClick={toggleTheme}
            className={classNames(
              "p-2.5 hover:text-[#D24A43] hover:scale-110 transition-all duration-300 rounded-lg",
              theme === 'light' 
                ? "text-gray-600 hover:bg-gray-50" 
                : "text-gray-300 hover:bg-gray-800"
            )}
            aria-label={theme === 'light' ? 'Переключить на темную тему' : 'Переключить на светлую тему'}
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>

          {/* Кнопка меню для мобильных */}
          <button 
            onClick={onMenuClick}
            className={classNames(
              "p-2.5 rounded-xl transition-all duration-200 hover:text-[#D24A43] group",
              theme === 'light' 
                ? "text-gray-700 hover:bg-gray-100" 
                : "text-gray-200 hover:bg-gray-800"
            )}
            aria-label="Открыть меню"
          >
            <div className="relative w-6 h-6">
              <span className={classNames(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 rounded-full transition-all duration-300 group-hover:bg-[#D24A43] group-hover:w-6",
                theme === 'light' ? "bg-gray-700" : "bg-gray-200"
              )}></span>
              <span className={classNames(
                "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 rounded-full transition-all duration-300 group-hover:bg-[#D24A43] group-hover:w-6",
                theme === 'light' ? "bg-gray-700" : "bg-gray-200"
              )}></span>
              <span className={classNames(
                "absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-0.5 rounded-full transition-all duration-300 group-hover:bg-[#D24A43] group-hover:w-6",
                theme === 'light' ? "bg-gray-700" : "bg-gray-200"
              )}></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}