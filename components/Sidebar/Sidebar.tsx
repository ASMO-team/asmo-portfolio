"use client";
import Icon from "@/icons/icon";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import cn from "classnames";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  // Блокировка скролла при открытом sidebar
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Закрытие по клавише Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const overlayClasses = cn(
    "fixed inset-0 z-40 transition-all duration-300 backdrop-blur-sm",
    {
      "opacity-100 bg-gray-900/30": isOpen, // Серый с прозрачностью 30% + размытие
      "opacity-0 pointer-events-none bg-transparent": !isOpen
    }
  );

  const sidebarClasses = cn(
    "fixed top-0 left-0 h-full w-80 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out",
    {
      "translate-x-0 shadow-xl": isOpen,
      "-translate-x-full shadow-none": !isOpen
    }
  );

  const linkClasses = "text-lg text-[#000000E6] hover:text-[#D24A43] transition-colors duration-300 py-2 border-b border-gray-100";
  const iconLinkClasses = "hover:scale-110 transition-transform duration-300";
  const closeButtonClasses = "p-2 hover:bg-gray-100 rounded-full transition-colors duration-200";
  const phoneButtonClasses = "flex items-center justify-center rounded-[86px] px-4 py-3 border border-solid border-black hover:bg-black transition-all duration-300 group";

  return (
    <>
      {/* Overlay с теневым эффектом вместо черного */}
      <div 
        className={overlayClasses}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={sidebarClasses}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <Image
            src="/asmo.svg"
            width={160}
            height={66}
            alt="asmo Logo"
            className="hover:opacity-80 transition-opacity duration-300"
          />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className={closeButtonClasses}
            aria-label="Закрыть меню"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col p-6 space-y-6">
          <Link 
            href="/" 
            className={linkClasses}
            onClick={onClose}
          >
            Главная
          </Link>
          <Link 
            href="/2"
            className={linkClasses}
            onClick={onClose}
          >
            О нас
          </Link>
        </nav>

        {/* Social links */}
        <div className="p-6 border-t border-gray-200">
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="mailto:contact@asmo.ru" 
              className={iconLinkClasses}
            >
              <Icon name="mail" width={30} height={23} />
            </a>
            <a 
              href="https://wa.me/79161234567" 
              className={iconLinkClasses}
            >
              <Icon name="whatsapp" width={25} height={25} />
            </a>
            <a 
              href="https://t.me/asmo" 
              className={iconLinkClasses}
            >
              <Icon name="tg" width={25} height={25} />
            </a>
          </div>

          {/* Phone number */}
          <div className="flex justify-center">
            <div className={phoneButtonClasses}>
              <a 
                href="tel:+79161234567" 
                className="text-black group-hover:text-[#D24A43] transition-colors duration-300 font-semibold"
              >
                +7 (916) 123-45-67
              </a>
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            Создаём будущее бизнеса с помощью ИИ
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;