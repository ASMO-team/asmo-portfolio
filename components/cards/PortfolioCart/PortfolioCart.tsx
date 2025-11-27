'use client';
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useTheme } from '@/hooks/useTheme';
import cn from "classnames";
import { PortfolioCartProps } from "./PortfolioCart.props";
import { H } from "@/components/typography/Htag/H";
import { P } from "@/components/typography/Ptag/P";

const PortfolioCart: FC<PortfolioCartProps> = ({
  id,
  imageUrl,
  title,
  description,
  className = "",
}) => {
  const { theme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className={cn(
        "rounded-2xl shadow-lg animate-pulse",
        "border",
        className
      )}>
        <div className="h-48 sm:h-56 md:h-64 lg:h-72 bg-gray-300 dark:bg-gray-700 rounded-t-2xl"></div>
        <div className="p-4 sm:p-6 md:p-8 bg-gray-200 dark:bg-gray-800 rounded-b-2xl">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-3"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={`/portfolio/${id}`}
      className={cn(
        "group relative overflow-hidden rounded-2xl shadow-lg",
        "transition-all duration-300 hover:shadow-2xl",
        "border focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50",
        theme === 'light' 
          ? "bg-white border-gray-200 hover:border-red-500" 
          : "bg-gray-800 border-gray-700 hover:border-red-500",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-20" />
        
        {/* Red accent corner */}
        <div 
          className={cn(
            "absolute top-0 right-0 w-12 h-12 bg-red-500",
            "transform rotate-45 translate-x-6 -translate-y-6",
            "opacity-80 group-hover:opacity-100 transition-opacity"
          )} 
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 md:p-8">
        {/* Title */}
        <H 
          type="h3" 
          isNotCenter
          className={cn(
            "mb-3 md:mb-4 transition-colors group-hover:text-red-500",
            theme === 'light' ? "text-gray-900" : "text-white"
          )}
        >
          {title}
        </H>
        
        {/* Description */}
        <P className={cn(
          "leading-relaxed transition-colors",
          theme === 'light' ? "text-gray-700" : "text-gray-300"
        )}>
          {description}
        </P>
        
        {/* Red line separator */}
        <div 
          className={cn(
            "w-12 h-1 bg-red-500 mt-4 md:mt-6 rounded-full",
            "transform transition-transform group-hover:scale-x-150"
          )} 
        />
      </div>

      {/* Hover effect border */}
      <div 
        className={cn(
          "absolute inset-0 border-2 border-transparent",
          "rounded-2xl transition-all duration-300 pointer-events-none",
          "group-hover:border-red-500"
        )} 
      />
    </Link>
  );
};

export default PortfolioCart;