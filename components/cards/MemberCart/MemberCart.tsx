'use client';
import Image from "next/image";
import { FC } from "react";
import { useTheme } from '@/hooks/useTheme';
import cn from "classnames";
import { ProfileCartProps } from "./MemberCartProps";
import { H } from "@/components/typography/Htag/H";
import { P } from "@/components/typography/Ptag/P";

const ProfileCart: FC<ProfileCartProps> = ({
  imageUrl,
  title,
  description,
  role,
  className = "",
}) => {
  const { theme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className={cn(
        "rounded-2xl shadow-lg animate-pulse p-6 text-center",
        "border",
        theme === 'light' ? "bg-gray-200 border-gray-300" : "bg-gray-800 border-gray-700",
        className
      )}>
        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-3 w-1/2 mx-auto"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mx-auto"></div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl shadow-lg",
        "transition-all duration-300 hover:shadow-2xl",
        "border text-center p-6",
        theme === 'light' 
          ? "bg-white border-gray-200 hover:border-red-500" 
          : "bg-gray-800 border-gray-700 hover:border-red-500",
        className
      )}
    >
      {/* Image Container */}
      <div className={cn(
        "relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 transition-colors duration-300",
        theme === 'light'
          ? "border-gray-100 group-hover:border-red-500"
          : "border-gray-700 group-hover:border-red-500"
      )}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 128px) 100vw, 128px"
        />
      </div>

      {/* Content */}
      <div className="space-y-3">
        {/* Name */}
        <H 
          type="h3" 
          className={cn(
            "group-hover:text-red-500 transition-colors duration-300",
            theme === 'light' ? "text-gray-900" : "text-white"
          )}
        >
          {title}
        </H>
        
        {/* Role */}
        {role && (
          <P className="text-red-500 font-semibold text-sm uppercase tracking-wide">
            {role}
          </P>
        )}
        
        {/* Description */}
        <P className={cn(
          "leading-relaxed transition-colors duration-300",
          theme === 'light' ? "text-gray-600" : "text-gray-300"
        )}>
          {description}
        </P>
      </div>

      {/* Hover effect border */}
      <div 
        className={cn(
          "absolute inset-0 border-2 border-transparent",
          "rounded-2xl transition-all duration-300 pointer-events-none",
          "group-hover:border-red-500"
        )} 
      />
    </div>
  );
};

export default ProfileCart;