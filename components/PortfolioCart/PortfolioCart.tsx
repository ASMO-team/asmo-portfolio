'use client';
import Image from "next/image";
import { FC } from "react";
import cn from "classnames";
import { PortfolioCartProps } from "./PortfolioCart.props";
import { H } from "../Htag/H";
import { P } from "../Ptag/P";

const PortfolioCart: FC<PortfolioCartProps> = ({
  imageUrl,
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white shadow-lg",
        "transition-all duration-300 hover:shadow-2xl",
        "border border-gray-200 hover:border-red-500",
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
            "mb-3 md:mb-4 transition-colors group-hover:text-red-500"
          )}
        >
          {title}
        </H>
        
        {/* Description */}
        <P className="text-gray-700 leading-relaxed">
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
    </div>
  );
};

export default PortfolioCart;