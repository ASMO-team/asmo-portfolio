'use client';
import { H } from "@/components/typography/Htag/H";
import { P } from "@/components/typography/Ptag/P";
import { BenefitCartProps } from "./BenefitCart.props";
import { useTheme } from "@/hooks/useTheme";
import classNames from "classnames";

interface BenefitCartWithIndex extends BenefitCartProps {
  index: number;
  theme?: 'light' | 'dark';
}

const BenefitCart = ({ description, title, index, theme }: BenefitCartWithIndex) => {
  const { theme: contextTheme, mounted } = useTheme();
  
  // Используем переданную тему или тему из контекста
  const currentTheme = theme || contextTheme;

  // Скелетон загрузки
  if (!mounted && !theme) {
    return (
      <li className="flex items-start w-full pb-6 md:pb-8 last:pb-0 gap-4 md:gap-6">
        <div className="shrink-0 w-10 h-10 bg-gray-300 dark:bg-gray-700 rounded-lg animate-pulse"></div>
        <div className="flex flex-col gap-3 md:gap-4 justify-start items-start w-full">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full animate-pulse"></div>
        </div>
      </li>
    );
  }

  return (
    <li className="flex items-start w-full pb-6 md:pb-8 last:pb-0 gap-4 md:gap-6">
      {/* Красный квадратик с номером */}
      <div className="shrink-0 w-10 h-10 bg-[#D24A43] text-white rounded-lg flex items-center justify-center font-bold text-lg mt-1">
        {index}
      </div>
      
      {/* Контент */}
      <div className="flex flex-col gap-3 md:gap-4 justify-start items-start w-full">
        <H 
          type="h3"
          className={classNames(
            "transition-colors duration-300",
            currentTheme === 'light' ? "text-gray-900" : "text-white"
          )}
        >
          {title}
        </H>
        <P
          className={classNames(
            "transition-colors duration-300",
            currentTheme === 'light' ? "text-gray-600" : "text-white"
          )}
        >
          {description}
        </P>
      </div>
    </li>
  );
}

export default BenefitCart;